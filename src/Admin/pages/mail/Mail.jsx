import React, { useState } from "react";
import { Modal, Form, Input, Upload, Button, message as antdMessage } from "antd";
import { UploadOutlined, MailOutlined } from "@ant-design/icons";
import TitleHelper from "../../component/TitleHelper";
import { sendusermail } from "../../../api";

const TextileVoucherMail = () => {
  const [visible, setVisible] = useState(false);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  // Open modal
  const showModal = () => {
    setVisible(true);
  };

  // Close modal and reset form + file
  const handleCancel = () => {
    setVisible(false);
    form.resetFields();
    setFile(null);
  };

  // Handle file select
  const handleFileChange = (info) => {
    const selectedFile = info.fileList.length > 0 ? info.fileList[0].originFileObj : null;
    setFile(selectedFile);
  };

  // Submit handler
  const onFinish = async (values) => {
    if (!file) {
      antdMessage.error("Please upload the voucher file.");
      return;
    }
    setLoading(true);

    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("message", values.message);
    formData.append("footer", values.footer || "");
    formData.append("attachments", file);

    try {
      await sendusermail(formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      antdMessage.success("Voucher email sent successfully!");
      handleCancel();
    } catch (error) {
      console.error(error);
      antdMessage.error("Failed to send voucher email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-50 to-amber-100 p-8"
      style={{
        backgroundImage: "url('https://www.transparenttextures.com/patterns/cloth-alike.png')",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="max-w-3xl bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-2xl p-12 text-center">
        <TitleHelper title="Sri Arasu Tex Voucher Mailer" />

        <p className="mb-6 text-amber-900 font-serif text-xl md:text-2xl">Send exclusive textile vouchers to your customers with ease.</p>

        <Button type="primary" size="large" icon={<MailOutlined />} onClick={showModal} className="bg-amber-600 border-amber-600 hover:bg-amber-700 hover:border-amber-700 transition-transform transform hover:scale-105 shadow-lg">
          Send Voucher Mail
        </Button>
      </div>

      <Modal title="Send Voucher Email" visible={visible} onCancel={handleCancel} footer={null} centered destroyOnClose bodyStyle={{ padding: "2rem" }}>
        <Form form={form} layout="vertical" onFinish={onFinish} initialValues={{ footer: "Best regards,\nSri Arasu Tex Team" }}>
          <Form.Item label="Title" name="title" rules={[{ required: true, message: "Please enter the email subject" }]}>
            <Input placeholder="Enter title" />
          </Form.Item>

          <Form.Item label="Message" name="message" rules={[{ required: true, message: "Please enter the message" }]}>
            <Input.TextArea rows={5} placeholder="Write your message here..." />
          </Form.Item>

          <Form.Item label="Footer" name="footer">
            <Input.TextArea rows={2} placeholder="Add footer/signature (optional)" />
          </Form.Item>

          <Form.Item label="Upload Voucher (Image or PDF)" required rules={[{ required: true, message: "Please upload the voucher file" }]}>
            <Upload beforeUpload={() => false} accept="image/*,.pdf" maxCount={1} onChange={handleFileChange} fileList={file ? [{ uid: "-1", name: file.name, status: "done" }] : []} onRemove={() => setFile(null)}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} block className="bg-amber-600 border-amber-600 hover:bg-amber-700 hover:border-amber-700">
              Send Mail
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default TextileVoucherMail;
