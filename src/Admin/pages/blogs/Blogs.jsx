import { Button, Divider, Drawer, Spin } from "antd";
import React, { useEffect, useState } from "react";
import _ from "lodash";
import moment from "moment";
import { ICON_HELPER } from "../../../helper/IconHelper";
import { ERROR_NOTIFICATION, SUCCESS_NOTIFICATION } from "../../../helper/notification_helper";
import TitleHelper from "../../component/TitleHelper";
import DefaultHeader from "../customComponents/DeafaultHeader";
import AddBlogs from "./AddBlogs";
import { deleteblogs, getblogs } from "../../../api";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [addStatus, setAddStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");
  const [blogData, setBlogData] = useState([]);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    try {
      setLoading(true);
      const result = await getblogs();
      const blogs = _.get(result, "data.data", []);
      setBlogData(blogs);
    } catch (err) {
      ERROR_NOTIFICATION(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (blogId) => {
    try {
      const result = await deleteblogs(blogId);
      SUCCESS_NOTIFICATION(result);
      fetchData();
    } catch (err) {
      ERROR_NOTIFICATION(err);
    }
  };

  const handleUpdate = (blogId) => {
    try {
      setId(blogId);
      setAddStatus(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCancel = () => {
    setAddStatus(false);
    setId(null);
  };

  useEffect(() => {
    fetchData();
  }, [search]);

  return (
    <div className="p-6">
      <TitleHelper title={"Blogs"} />

      <DefaultHeader icon={<ICON_HELPER.COTTON_ICON />} add={true} model={true} setAddStatus={setAddStatus} addStatus={addStatus} setSearch={setSearch} text="Add Blogs" pageName="Blogs" />

      <Drawer onClose={handleCancel} width={"100%"} open={addStatus} title={`${id ? "Update" : "Add"} Blog`}>
        <AddBlogs setAddStatus={setAddStatus} setLoading={setLoading} fetchData={fetchData} id={id} blogData={blogData} setId={setId} />
      </Drawer>

      <Spin spinning={loading}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {blogData.length > 0 ? (
            blogData.map((blog) => (
              <div key={blog._id} className="bg-white rounded-xl shadow-md hover:shadow-xl transform transition duration-300 w-[350px] overflow-hidden">
                <div className="relative">
                  <img src={blog.blog_image} alt={blog.blog_name} className="w-[350px] h-[250px] object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                <div className="p-4">
                  <div className="flex justify-between items-center text-gray-400 text-xs mb-2">
                    <h3 className="text-primary  text-sm !font-bold uppercase   px-3 py-1 rounded-full inline-block mb-2  ">{blog.blog_name}</h3>
                    <p>{moment(blog.createdAt).format("MMM Do YY")}</p>
                  </div>

                  <p className="text-gray-700 mt-2 text-sm line-clamp-3">{blog.short_description}</p>

                  <Divider />

                  <div className="mt-4 flex justify-between">
                    <Button className="bg-green-100 text-green-700 hover:bg-green-200 border-none" onClick={() => handleUpdate(blog)} icon={<ICON_HELPER.EDIT_ICON />} />
                    <Link to={`/blogsdetails/${blog._id}`}>
                      <Button className="bg-green-100 text-green-700 hover:bg-green-200 border-none" icon={<ICON_HELPER.EYE_ICON />} />
                    </Link>
                    <Button className="bg-red-100 text-red-600 hover:bg-red-200 border-none" onClick={() => handleDelete(blog._id)} icon={<ICON_HELPER.DELETE_ICON />} />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="mt-10 text-center font-semibold text-gray-500">No blogs found.</p>
          )}
        </div>
      </Spin>
    </div>
  );
};

export default Blogs;
