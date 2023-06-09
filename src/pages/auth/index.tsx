import { Spin } from 'antd'
import { Suspense } from 'react'
import { adminBg, logoFull } from '../../assets'

const AuthLayout = (WraperContent: any) => {
  return function () {
    return (
      <Suspense
        fallback={
          <div className='spin flex items-center justify-center h-[calc(100vh-132px)]'>
            <Spin />
          </div>
        }
      >
        <div
          className='bg-top bg-no-repeat'
          style={{
            backgroundImage: `url(${adminBg})`
          }}
        >
          <div className='py-12 2xl:py-[80px] px-[15px]'>
            <div className='flex justify-center'>
              <img className='' src={logoFull} alt='' />
            </div>
            <WraperContent />
          </div>
        </div>
      </Suspense>
    )
  }
}

export default AuthLayout
