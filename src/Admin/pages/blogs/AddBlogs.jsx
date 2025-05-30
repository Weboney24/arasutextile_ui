import { Form, Input, Button, message } from "antd";
import React, { useEffect, useState, useRef } from "react";
import _ from "lodash";
import JoditEditor from "jodit-react";
import { ERROR_NOTIFICATION, SUCCESS_NOTIFICATION } from "../../../helper/notification_helper";
import { formValidation } from "../../../helper/formValidation";
import { addblogs, editblogs } from "../../../api";
import ShowImages from "../../../helper/ShowImages";
import UploadHelper from "../../../helper/UploadHelper";

const AddBlogs = (props) => {
  const { setLoading, setAddStatus, fetchData, id } = props;
  const [image_path, setImagepath] = useState("");
  const [additionalImages, setAdditionalImages] = useState([]);
  const [form] = Form.useForm();
  const [blogdescription, setBlogDescription] = useState("");
  const editor = useRef(null);

  // Handle form submission
  const handleFinish = async (values) => {
    try {
      if (!image_path) {
        return message.warning("Please provide a blog image");
      }

      values.blog_image = image_path;
      values.additional_images = additionalImages;
      values.blog_description = blogdescription;

      let result = "";
      if (id) {
        result = await editblogs(values, id?._id);
      } else {
        result = await addblogs(values);
      }

      SUCCESS_NOTIFICATION(result);
      setAddStatus(false);
      form.resetFields();
      setImagepath("");
      setBlogDescription("");
      setAdditionalImages([]);
    } catch (err) {
      ERROR_NOTIFICATION(err);
      console.log(err);
    } finally {
      setLoading(false);
      fetchData();
    }
  };

  // Populate form when editing
  useEffect(() => {
    if (!_.isEmpty(id)) {
      form.setFieldsValue({
        blog_name: id?.blog_name,
        short_description: id?.short_description,
      });
      setImagepath(id?.blog_image);
      setBlogDescription(String(id?.blog_description || ""));
      setAdditionalImages(id?.additional_images || []);
    }
  }, [id]);

  // Add additional image
  const handleAdditionalImages = (newImage) => {
    setAdditionalImages([...additionalImages, newImage]);
  };

  // Remove additional image
  const removeAdditionalImage = (index) => {
    const updated = [...additionalImages];
    updated.splice(index, 1);
    setAdditionalImages(updated);
  };

  return (
    <div className="!flex !justify-center !items-center !min-h-screen !bg-white !shadow-lg !p-6 !rounded-lg !w-full">
      <div className="!w-[80%]">
        <Form form={form} layout="vertical" name="add_blog" initialValues={{ remember: true }} onFinish={handleFinish}>
          {/* Main Blog Image */}
          <Form.Item className="w-full" label="Main Blog Image">
            {image_path ? <ShowImages path={image_path} setImage={setImagepath} /> : <UploadHelper setImagepath={setImagepath} />}
          </Form.Item>

          {/* Blog Name */}
          <Form.Item name="blog_name" label="Blog Name" rules={[formValidation("Enter Blog Name")]}>
            <Input placeholder="Enter Blog Name" className="h-[50px] w-full rounded-md !bg-white text-gray-800 px-4 focus:outline-none focus:ring-2 focus:ring-secondary shadow-lg" />
          </Form.Item>

          {/* Short Description */}
          <Form.Item name="short_description" label="Short Description" rules={[formValidation("Enter Blog Short Description")]}>
            <Input placeholder="Enter Short Description" className="h-[50px] w-full rounded-md !bg-white text-gray-800 px-4 focus:outline-none focus:ring-2 focus:ring-secondary shadow-lg" />
          </Form.Item>

          {/* Blog Description (handled separately) */}
          <Form.Item label="Blog Description" required>
            <JoditEditor
              ref={editor}
              value={String(blogdescription || "")}
              config={{
                askBeforePasteHTML: false,
                askBeforePasteFromWord: false,
              }}
              onChange={(newContent) => setBlogDescription(newContent)}
            />
          </Form.Item>

          {/* Additional Blog Images */}
          <Form.Item label="Additional Blog Images">
            <UploadHelper setImagepath={handleAdditionalImages} />
            <div className="flex flex-wrap gap-2 mt-3">
              {additionalImages.map((img, idx) => (
                <div key={idx} className="relative w-[100px] h-[100px]">
                  <img src={img} alt={`additional-${idx}`} className="w-full h-full object-cover rounded-md" />
                  <button type="button" onClick={() => removeAdditionalImage(idx)} className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 text-xs">
                    ×
                  </button>
                </div>
              ))}
            </div>
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Button type="submit" htmlType="submit" className="w-full !bg-primary !text-white !py-6 rounded-md transition-all duration-300 font-primary">
              {id ? "Edit Blog" : "Add Blog"}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AddBlogs;
