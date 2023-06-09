// import  { useState, useCallback } from 'react';
import { NavLink } from 'react-router-dom'
import { Form, Input, Button, Row, Col } from 'antd'
// import { useDispatch, useSelector } from 'react-redux';

function Login () {
  // const history = useNavigate();
  // const dispatch = useDispatch();
  // const isLoading = useSelector((state) => state.auth.loading);
  const [form] = Form.useForm()

  return (
    <Row justify='center'>
      <Col xxl={6} xl={8} md={12} sm={18} xs={24}>
        <div className='mt-6 bg-white rounded-md dark:bg-white10 shadow-regular dark:shadow-none'>
          <div className='px-5 py-4 text-center border-b border-gray-200 dark:border-white10'>
            <h2 className='mb-0 text-xl font-semibold text-dark dark:text-white87'>
              Pinjam Modal Tech
            </h2>
          </div>
          <div className='px-10 pt-8 pb-6'>
            <Form
              name='login'
              form={form}
              // onFinish={handleSubmit}
              layout='vertical'
            >
              <Form.Item
                name='email'
                rules={[
                  {
                    message: 'Please input your username or Email!',
                    required: true
                  }
                ]}
                initialValue='ninjadash@dm.com'
                label='Username or Email Address'
                className='[&>div>div>label]:text-sm [&>div>div>label]:text-dark dark:[&>div>div>label]:text-white60 [&>div>div>label]:font-medium'
              >
                <Input placeholder='name@example.com' />
              </Form.Item>
              <Form.Item
                name='password'
                initialValue='123456'
                label='Password'
                className='[&>div>div>label]:text-sm [&>div>div>label]:text-dark dark:[&>div>div>label]:text-white60 [&>div>div>label]:font-medium'
              >
                <Input.Password placeholder='Password' />
              </Form.Item>
              <div className='flex flex-wrap justify-end gap-[10px]'>
                <NavLink className='text-primary text-13' to='/forgotPassword'>
                  Forgot password?
                </NavLink>
              </div>
              <Form.Item>
                <Button
                  className='w-full h-12 p-0 my-6 text-sm font-medium'
                  htmlType='submit'
                  type='primary'
                >
                  {/* {isLoading ? 'Loading...' : 'Sign In'} */}
                  Sign In
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default Login
