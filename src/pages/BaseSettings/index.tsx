import React from 'react';
import {message} from 'antd';
import ProForm, {ProFormSelect, ProFormText,} from '@ant-design/pro-form';
import styles from './BaseView.less';
import {USER_LOGIN_STATE} from "@/constants";
import {baseSetting} from "@/services/ant-design-pro/api";

const BaseView: React.FC = () => {
  function getCookie(cname: string) {
    const name = cname + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      const c = ca[i].trim();
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  const s = getCookie(USER_LOGIN_STATE)
  const currentUser = JSON.parse(s)

  const handleFinish = async (a: API.BaseSettingParams) => {

    const istrue = await baseSetting(a)
    console.log(istrue,1)
    if (istrue)
      message.success('更新基本信息成功');
    else
      message.success('更新基本信息失败');

  };
  return (
    <div className={styles.baseView}>
      <div className={styles.left}>
        <ProForm
          layout="vertical"
          onFinish={handleFinish}
          submitter={{
            resetButtonProps: {
              style: {
                display: 'block',
              },
            },
            submitButtonProps: {
              children: '更新基本信息',
            },
          }}
          initialValues={{
            ...currentUser,
          }}
        >
          <ProFormText
            width="md"
            name="username"
            label="昵称"
            rules={[
              {
                message: '请输入您的昵称!',
              },
            ]}
          />
          <ProFormSelect
            width="xs"
            name="gender"
            label="性别"
            options={[
              {
                label: '男',
                value: '男',
              },
              {
                label: '女',
                value: '女',
              },
            ]}
          />
          <ProFormText
            width="md"
            name="phone"
            label="联系电话"
            rules={[
              {
                message: '请输入正确的联系电话!',
                pattern: /^1[3|4|5|7|8|9]\d{9}$/,
              },
            ]}
          />
          <ProFormText
            width="md"
            name="email"
            label="邮箱"
            rules={[
              {
                message: '请输入正确的联系邮箱!',
                pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$/,
              },
            ]}
          />
        </ProForm>
      </div>
    </div>
  );
};

export default BaseView;
