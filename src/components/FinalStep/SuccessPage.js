const SuccessPage = () => {
  return (
    <div className="flex-grow flex flex-col justify-center items-center mx-auto max-w-[450px] text-center py-10 px-3">
      <div><img src="/images/icon-thank-you.svg" alt="Thank You!" /></div>
      <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mt-3 sm:mt-5 mb-2">Thank you!</h2>
      <h3 className="text-sm md:text-base text-gray-400">Thanks for confirming your subscribtion! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</h3>
    </div>
  )
}

export default SuccessPage;