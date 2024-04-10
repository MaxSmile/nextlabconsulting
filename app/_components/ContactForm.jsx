export default function ContactForm() {
  return (
    <div id="contact" className="flex justify-center items-center self-center px-6 py-16 mt-32 max-w-full bg-blue-700 rounded-2xl border border-solid border-blue-950 w-[1345px] max-md:px-5 max-md:mt-10">
      <div className="w-full max-w-[1099px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
              <div className="text-6xl tracking-tighter text-white uppercase leading-[60px] max-md:max-w-full max-md:text-4xl">
                Get in touch
              </div>
              <div className="mt-6 text-xl leading-7 text-white max-md:max-w-full">
                Share your project insights! Click here to fill out a quick form
                and help us better understand your needs, ensuring we provide
                the best possible service
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col text-base leading-6 text-white max-md:max-w-full">
                <div className="max-md:max-w-full">Your name *</div>
                <div className="shrink-0 mt-3 h-px border border-solid bg-white bg-opacity-30 border-white border-opacity-30 max-md:max-w-full" />
              </div>
              <div className="flex flex-col mt-5 text-base leading-6 text-white max-md:max-w-full">
                <div className="max-md:max-w-full">Mobile Number *</div>
                <div className="shrink-0 mt-3 h-px border border-solid bg-white bg-opacity-30 border-white border-opacity-30 max-md:max-w-full" />
              </div>
              <div className="flex flex-col mt-5 text-base leading-6 text-white max-md:max-w-full">
                <div className="max-md:max-w-full">E-mail *</div>
                <div className="shrink-0 mt-3 h-px border border-solid bg-white bg-opacity-30 border-white border-opacity-30 max-md:max-w-full" />
              </div>
              <div className="flex flex-col mt-5 text-base leading-6 text-white whitespace-nowrap max-md:max-w-full">
                <div className="max-md:max-w-full">Institution*</div>
                <div className="shrink-0 mt-3 h-px border border-solid bg-white bg-opacity-30 border-white border-opacity-30 max-md:max-w-full" />
              </div>
              <div className="flex flex-col mt-5 text-base leading-6 text-white max-md:max-w-full">
                <div className="max-md:max-w-full">
                  Tell us more about your brand
                </div>
                <div className="shrink-0 mt-8 h-px border border-solid bg-white bg-opacity-30 border-white border-opacity-30 max-md:max-w-full" />
              </div>
              <div className="flex gap-5 justify-between mt-5 max-md:flex-wrap max-md:max-w-full">
                <div className="justify-center items-center px-8 py-3 text-lg font-medium whitespace-nowrap bg-white rounded-md text-blue-950 max-md:px-5">
                  Submit
                </div>
                <div className="my-auto text-sm leading-5 text-white">
                  By clicking the &quot;Submit&quot; button, you agree to the
                  Privacy Policy
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


