import { Form, Input, Button } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import _ from "lodash";
import { useEffect, useState } from "react";
import { login } from "../../api";
import { CgClose } from "react-icons/cg";
import { EmailValidation, PasswordValidation } from "../../helper/formValidation";
import TitleHelper from "../../Admin/component/TitleHelper";
import { IMAGE_HELPER } from "../../helper/imagehelper";
import { LabelHelper } from "../../Admin/component/LabelHelper";
import { adminToken, ERROR_NOTIFICATION, SUCCESS_NOTIFICATION } from "../../helper/notification_helper";

const Login = () => {
  const navigation = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    try {
      setLoading(true);
      const result = await login(values);
      if (_.isEmpty(_.get(result, "data.data", []))) {
        return ERROR_NOTIFICATION("Invalid credentials");
      }
      localStorage.setItem(adminToken, _.get(result, "data.data.token", ""));
      SUCCESS_NOTIFICATION(result);
      const role = _.get(result, "data.data.role", []);
      if (role === "customer") {
        navigation("/");
      } else {
        navigation("/admin-blogs");
      }
    } catch (err) {
      console.log(err);
      ERROR_NOTIFICATION(err);
    } finally {
      setLoading(false);
    }
  };

  const checkUserLoginStatus = async () => {
    if (localStorage.getItem(adminToken)) {
      navigation("/admin-blogs");
    }
  };

  useEffect(() => {
    checkUserLoginStatus();
  }, [navigation]);

  return (
    <div className="!w-full !h-screen !flex !items-center !justify-center !relative p-4">
      <TitleHelper title={"Login"} />
      <div className="rounded-lg  group w-[400px] min-h-[200px] flex-wrap center_div pt-10 pb-2 max-w-md shadow-2xl relative">
        <div className="absolute top-5 right-5">
          <Link to={"/"}>
            <CgClose className="text-[30px] text-white" />
          </Link>
        </div>
        <Link to={"/"} className="mb-6 w-full  items-center flex justify-center">
          <img src={IMAGE_HELPER.ARASU_LOGO} alt="Company Logo" className="w-40" />
        </Link>
        <Form name="login" onFinish={onFinish} layout="vertical" initialValues={{ remember: true }} className="w-full">
          <div className="flex justify-center items-center">
            <Form.Item name="email" label={<LabelHelper title="Email" white={true} />} rules={[EmailValidation()]}>
              <Input prefix={<MailOutlined />} placeholder="Enter your email" className="antd_input" />
            </Form.Item>
          </div>

          <div className="flex justify-center items-center ">
            <Form.Item name="password" label={<LabelHelper title="Password" white={true} />} rules={[PasswordValidation()]}>
              <Input.Password prefix={<LockOutlined />} placeholder="Enter your password" className="antd_input" />
            </Form.Item>
          </div>

          <div className="px-10">
            <Form.Item>
              <Button loading={loading} htmlType="submit" className="primary_button !h-[46px] !w-full">
                Login
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
