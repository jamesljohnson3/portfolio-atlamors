import * as React from "react";
import { useState } from "react";

export default function MyComponent() {
  const [formErrorMessage, setFormErrorMessage] = useState(() => null);

  return (
    <>
      <div className="ml-[calc(50%_-_50vw)] bg-[url(https://cdn.builder.io/api/v1/image/assets%2Fa480daf8d0e34c12bcc3f48f0079ed71%2Fc5f2941e889f4ce79b85ca1a1c9951e9?width=2000)] bg-no-repeat bg-center bg-cover w-screen mr-auto max-md:ml-[calc(50%_-_50vw)] max-md:w-screen max-md:mr-auto max-sm:bg-[url(https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2F2811b691e38a4e86926be663c1af88b4?width=638)] max-sm:mx-auto">
        <div className="items-center flex flex-col justify-center mt-[83px] max-md:mt-[23px] max-md:pt-[71px] max-sm:mt-[65px] max-sm:pt-0">
          <div className="mt-[-10px] max-w-[900px] flex max-md:flex max-md:mt-0 max-sm:flex max-sm:ml-[20px]">
            <div className="text-center w-screen max-w-[880px] mt-[5px] mx-auto pl-[25px] border-solid border-0 max-sm:max-w-[317px] max-sm:mt-0">
              <h1 className="leading-tight text-[64px] text-[rgba(22,11,54,1)] font-extrabold h-auto grow-0 block max-h-[164px] mt-[69px] border-solid border-0 max-sm:text-[30px] max-sm:text-[rgba(22,11,54,1)] max-sm:ml-[-50px] max-sm:mt-0">
                <p>Design, test and manage your products better</p>
              </h1>
            </div>
          </div>
          <div
            className="hidden flex-col relative shrink-0 box-border min-h-[100px] mt-0 pt-[10px] pb-[20px] px-[20px] max-md:hidden max-sm:flex max-sm:w-screen max-sm:ml-[calc(50%_-_50vw)] max-sm:max-h-[167px] max-sm:mt-[21px] max-sm:pb-0"
            maxWidth={1200}
            lazyLoad={false}
          >
            <section className="hidden flex-col relative shrink-0 box-border min-h-[100px] mt-0 pt-[10px] pb-[20px] px-[20px] max-md:hidden max-sm:flex max-sm:w-screen max-sm:ml-[calc(50%_-_50vw)] max-sm:max-h-[167px] max-sm:mt-[21px] max-sm:pb-0 section">
              <div className="text-[14px] caret-[rgb(58,58,56)] text-[rgb(58,58,56)] grid-cols-[auto] h-[747.156px] min-h-[auto] min-w-[auto] outline-[rgb(58,58,56)] relative decoration-[rgb(58,58,56)] text-ellipsis origin-[664.5px_373.578px] select-none w-full border-[rgb(58,58,56)] border-0 inset-0 max-md:h-[397.15599999999995px] max-sm:max-h-[266px]">
                <div className="text-[14px] caret-[rgb(58,58,56)] text-[rgb(58,58,56)] grid-cols-[auto] outline-[rgb(58,58,56)] relative decoration-[rgb(58,58,56)] origin-[664.5px_373.578px] select-none w-full pt-[747.156px] border-[rgb(58,58,56)] border-0 inset-0 max-md:pt-[97.15599999999995px] max-sm:pt-0">
                  <video
                    data-testid="hero-frame-video"
                    autoplay="false"
                    playsinline="false"
                    disablepictureinpicture="false"
                    controlslist="nodownload noremoteplayback noplaybackrate"
                    poster="https://res.cloudinary.com/unlimitednow/image/upload/v1667596955/Screen_Shot_2022-02-06_at_2.41.42_PM_azgx66.png"
                    controls="false"
                    className="text-[14px] bottom-[-373.578px] shadow-[rgba(0,0,0,0.133)_0px_6.4px_14.4px_0px,rgba(0,0,0,0.11)_0px_1.2px_3.6px_0px] caret-[rgb(58,58,56)] text-[rgb(58,58,56)] block grid-cols-[auto] h-[753px] inset-[373.578px_-664.5px_-373.578px_664.5px] outline-[rgb(58,58,56)] absolute right-[-664.5px] decoration-[rgb(58,58,56)] origin-[664.5px_373.578px] select-none w-[1208px] bg-[url(https://videos.ctfassets.net/9i6monomvi82/TiScJyq2sMowPmYEu5tNf/accf5ba3fc2a566a82e2827cdc3cff57/default\_\_5\_.mp4)] bg-no-repeat bg-center bg-cover rounded-[24px] border-[rgb(58,58,56)] border-0 left-[650px] top-[372px] max-md:h-[427px] max-md:w-[714px] max-md:left-[680px] max-md:top-[372px] max-sm:h-[187px] max-sm:w-[346px] max-sm:left-[665px] max-sm:top-[364px]"
                  />
                </div>
              </div>
            </section>
          </div>
          <div className="items-center flex flex-col justify-center max-w-[700px] max-md:max-w-[550px] max-md:flex max-sm:max-w-none max-sm:hidden max-sm:pb-[25px]">
            <div className="flex flex-col mx-auto pt-[10px] max-md:mt-[93px] max-sm:flex max-sm:justify-between max-sm:max-w-[300px] max-sm:flex-col max-sm:mt-[24px]">
              <p className="text-[rgb(44,44,44)] text-[20px] text-center leading-[32px] flex max-md:flex max-sm:hidden max-sm:text-[16px] max-sm:leading-[28px] max-sm:mt-[-6px] max-sm:items-center max-sm:justify-center">
                <p>
                  <span style="font-size: 20px;">
                    Templates and blueprints to command your space— all in one
                    place.{" "}
                  </span>
                </p>
              </p>
              <form
                sendSubmissionsTo="custom"
                sendSubmissionsToEmail="your@email.com"
                name="My form"
                contentType="application/json"
                method="POST"
                previewState="unsubmitted"
                action="https://connect.unlimitednow.site"
                successUrl="https://sso2.unlimitpotential.com/knock-knock"
                className="flex relative text-[14px] items-stretch bg-white caret-[rgb(58,58,56)] text-[rgb(58,58,56)] cursor-text grid-cols-[auto] outline-[rgb(58,58,56)] decoration-[rgb(58,58,56)] origin-[200px_25px] select-none w-full max-w-[482px] border mt-[27px] mx-auto pl-0 rounded-br-[2px] rounded-bl-[2px] rounded-[42px] border-[rgba(139,139,139,1)] border-0 border-[rgb(58,58,56)] border-solid inset-0 max-sm:border max-sm:shadow-[1px_1px_-44px_-16px_rgba(31,30,30,1)] max-sm:max-w-[495px] max-sm:mx-auto max-sm:pl-0 max-sm:border-solid max-sm:border-[rgba(231,231,231,1)]"
                sendWithJs={true}
                successMessage={[
                  {
                    "@type": "@builder.io/sdk:Element",
                    "@version": 2,
                    id: "builder-079030e8bfaf42568c4111a96b36fa07",
                    component: {
                      name: "Text",
                      options: {
                        text: "<span>Thanks!</span>",
                      },
                    },
                    responsiveStyles: {
                      large: {
                        marginTop: "10px",
                      },
                    },
                  },
                ]}
                validate={true}
                errorMessage={[
                  {
                    "@type": "@builder.io/sdk:Element",
                    "@version": 2,
                    bindings: {
                      "component.options.text":
                        "formErrorMessage || block.component.options.text",
                    },
                    id: "builder-c0247bf735504a5099c3cd2dc8ebe0f9",
                    component: {
                      name: "Text",
                      options: {
                        text: "<span>Form submission error :( Please check your answers and try again</span>",
                      },
                    },
                    responsiveStyles: {
                      large: {
                        marginTop: "10px",
                      },
                    },
                  },
                ]}
                sendingMessage={[
                  {
                    "@type": "@builder.io/sdk:Element",
                    "@version": 2,
                    id: "builder-e362748fb40c42ac940bc69e4c258106",
                    component: {
                      name: "Text",
                      options: {
                        text: "<span>Sending...</span>",
                      },
                    },
                    responsiveStyles: {
                      large: {
                        marginTop: "10px",
                      },
                    },
                  },
                ]}
              >
                <input
                  name="visitor_id"
                  value="visitor_id"
                  id="visitor_id"
                  placeholder="Jane Doe"
                  type="hidden"
                  defaultValue="visitor_id"
                  className="mt-[10px]"
                />
                <input
                  name="input2"
                  placeholder=""
                  type="hidden"
                  defaultValue="unlimitednow"
                  className="mt-[10px]"
                />
                <input
                  name="email"
                  placeholder="Your Email"
                  className="caret-[rgb(58,58,56)] text-[rgb(58,58,56)] block text-[18px] min-h-[auto] outline-[rgb(58,58,56)] decoration-[rgb(58,58,56)] text-ellipsis origin-[200px_25px] select-none w-full shadow-[1px_1px_23px_-3px_rgba(138,138,138,1)] opacity-100 pl-[20px] pr-[172px] pt-[10px] pb-[12px] rounded-[48px] border-[rgba(0,0,0,0)] border-solid border-[5px] max-sm:text-[14px] max-sm:opacity-100 max-sm:shadow-[1px_1px_19px_-7px_rgba(0,0,0,1)] max-sm:border max-sm:ml-0 max-sm:pl-[10px] max-sm:border-[rgba(0,0,0,0)]"
                  required={true}
                />
                <div className="relative shrink-0 box-border flex flex-row ml-[-401px] max-w-[5px]">
                  <button
                    text="Join the waitlist"
                    className="bg-[rgba(32,19,71,1)] caret-[rgb(58,58,56)] text-white cursor-pointer block text-[14px] grid-cols-[auto] outline-[rgba(0,0,0,0)] relative decoration-[rgb(58,58,56)] text-ellipsis origin-[81.3047px_25px] select-none font-semibold min-h-[61px] w-auto self-center min-w-[166px] -ml-px mr-auto pt-[10px] pb-[12px] px-[17.6px] rounded-[48px] border-none border-[rgb(58,58,56)] border-0 inset-[0px_0px_0px_237.391px] max-sm:min-w-[174px] max-sm:px-0"
                  />
                </div>
              </form>
              <div className="text-[14px] caret-[rgb(58,58,56)] text-[rgb(58,58,56)] grid-cols-[auto] min-h-[auto] min-w-[auto] outline-[rgb(58,58,56)] decoration-[rgb(58,58,56)] text-ellipsis origin-[200px_26.5px] select-none flex flex-col items-stretch mt-[12px] mx-auto border-[rgb(58,58,56)] border-0 max-sm:w-screen max-sm:max-w-[274px] max-sm:mx-auto">
                <div className="text-[12px] caret-[rgb(97,97,97)] text-[rgb(97,97,97)] flex outline-[rgb(97,97,97)] text-center decoration-[rgb(97,97,97)] origin-[200px_26.5px] select-none max-w-[381px] pt-[16px] pb-[10px] px-[2px] border-[rgb(97,97,97)] border-0 max-sm:text-[12px]">
                  <p>Get email updates when we release new features.</p>
                </div>
                <a
                  href="https://status.unlimitpotential.com/"
                  className="flex h-auto pointer-events-auto leading-[normal] flex-col shrink-0 box-border cursor-pointer relative m-auto pt-[19px]"
                >
                  <p>View Status</p>
                </a>
                <a
                  href="https://unlimitpotential.canny.io/"
                  className="flex flex-col relative shrink-0 box-border leading-[normal] h-auto pointer-events-auto cursor-pointer m-auto pt-[13px] pb-[20px]"
                >
                  <p>Roadmap</p>
                </a>
              </div>
            </div>
          </div>
          <div className="text-[14px] caret-[rgb(58,58,56)] text-[rgb(58,58,56)] grid-cols-[auto] outline-[rgb(58,58,56)] decoration-[rgb(58,58,56)] origin-[712.5px_83.5px] select-none w-screen hidden flex-col mt-[30px] mx-auto pt-[18px] pt-[16px] pb-[36px] px-[32px] border-[rgb(58,58,56)] border-0 max-md:hidden max-md:mt-[16px] max-sm:flex max-sm:mt-[36px] max-sm:p-0">
            <form
              action="https://connect.unlimitednow.site"
              formEncType="multipart/form-data"
              method="Post"
              className="text-[14px] caret-[rgb(58,58,56)] text-[rgb(58,58,56)] grid-cols-[auto] outline-[rgb(58,58,56)] decoration-[rgb(58,58,56)] origin-[680.5px_57.5px] select-none w-screen flex flex-col items-stretch m-auto border-[rgb(58,58,56)] border-0"
            >
              <div className="text-[14px] items-center caret-[rgb(58,58,56)] text-[rgb(58,58,56)] flex flex-col grid-cols-[auto] outline-[rgb(58,58,56)] decoration-[rgb(58,58,56)] origin-[200px_57.5px] select-none min-w-[378px] mx-auto pl-0 border-[rgb(58,58,56)] border-0">
                <div className="text-[14px] items-start bg-white shadow-[rgba(0,0,0,0.14)_0px_1px_2px_0px,rgba(0,0,0,0.12)_0px_0px_2px_0px] caret-[rgb(58,58,56)] text-[rgb(58,58,56)] flex grid-cols-[auto] min-h-[auto] min-w-[auto] outline-[rgb(58,58,56)] overflow-hidden overflow-x-hidden overflow-y-hidden relative decoration-[rgb(58,58,56)] text-ellipsis origin-[200px_25px] select-none mx-auto rounded-[48px] border-[rgb(58,58,56)] border-0 inset-0 max-sm:w-[320px]">
                  <div className="text-[14px] caret-[rgb(58,58,56)] text-[rgb(58,58,56)] grid-cols-[auto] min-h-[auto] min-w-[auto] outline-[rgb(58,58,56)] relative decoration-[rgb(58,58,56)] text-ellipsis origin-[200px_25px] select-none w-full border-[rgb(58,58,56)] border-0 inset-0 max-sm:w-screen max-sm:ml-[calc(50%_-_50vw)]">
                    <div className="text-[14px] caret-[rgb(58,58,56)] text-[rgb(58,58,56)] grid-cols-[auto] outline-[rgb(58,58,56)] decoration-[rgb(58,58,56)] origin-[200px_25px] select-none w-full border-[rgb(58,58,56)] border-0">
                      <div className="text-[14px] items-stretch bg-white caret-[rgb(58,58,56)] text-[rgb(58,58,56)] cursor-text flex grid-cols-[auto] outline-[rgb(58,58,56)] relative decoration-[rgb(58,58,56)] origin-[200px_25px] select-none w-full rounded-[2px] border-[rgb(58,58,56)] border-0 inset-0 max-sm:ml-[24px] max-sm:pl-0">
                        <input
                          type="email"
                          aria-required="true"
                          placeholder="   Your email"
                          aria-invalid="false"
                          name="input"
                          required="true"
                          className="caret-[rgb(58,58,56)] text-[rgb(58,58,56)] block text-[18px] min-h-[auto] outline-[rgb(58,58,56)] decoration-[rgb(58,58,56)] text-ellipsis origin-[200px_25px] select-none w-full pl-[20px] pr-[172px] pt-[10px] pb-[12px] rounded-[48px] border-[rgba(0,0,0,0)] border-solid max-sm:text-[14px] max-sm:ml-[16px] max-sm:pl-0"
                        />
                        <input
                          type="hidden"
                          name="visitor_id"
                          value="visitor_id"
                          placeholder="Email"
                          id="visitor_id"
                          className="bg-[rgb(240,240,240)] h-[50px] box-border leading-[1.33] w-full px-[18px] border-none border-0"
                        />
                        <input
                          type="hidden"
                          aria-required="true"
                          aria-invalid="false"
                          name="input2"
                          required="true"
                          value="unlimitednow"
                          _newProperty=""
                          className="caret-[rgb(58,58,56)] text-[rgb(58,58,56)] block text-[18px] min-h-[auto] outline-[rgb(58,58,56)] decoration-[rgb(58,58,56)] text-ellipsis origin-[200px_25px] select-none w-full pl-[20px] pr-[172px] pt-[10px] pb-[12px] rounded-[48px] border-[rgba(0,0,0,0)] border-solid max-sm:ml-[16px] max-sm:pl-0"
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    _newProperty=""
                    data-inputbox=".t-input-group"
                    className="bg-black caret-[rgb(58,58,56)] text-[rgb(58,58,56)] cursor-pointer block text-[14px] grid-cols-[auto] h-[50px] min-w-[80px] outline-[rgba(0,0,0,0)] absolute decoration-[rgb(58,58,56)] text-ellipsis origin-[81.3047px_25px] select-none pt-[10px] pb-[12px] px-[17.6px] rounded-[48px] border-none border-[rgb(58,58,56)] border-0 left-[237.391px] right-0 inset-y-0 inset-[0px_0px_0px_237.391px] max-sm:w-[173px] max-sm:h-[48px] max-sm:bg-[rgba(22,11,54,1)] max-sm:left-[148px] max-sm:top-0"
                  >
                    <span
                      data-automationid="splitbuttonprimary"
                      className="text-[14px] items-center caret-[rgb(58,58,56)] text-[rgb(58,58,56)] cursor-pointer flex grid-cols-[auto] h-[28px] justify-center outline-[rgb(58,58,56)] text-center decoration-[rgb(58,58,56)] origin-[63.7109px_14px] select-none border-[rgb(58,58,56)] border-0"
                    >
                      <span className="text-[18px] caret-white text-white cursor-pointer block grow grid-cols-[auto] min-h-[auto] min-w-[auto] outline-white text-center decoration-white origin-[63.7109px_9px] select-none font-semibold leading-[18px] border-white border-0">
                        Join the waitlist
                      </span>
                    </span>
                  </button>
                </div>
                <div className="text-[14px] caret-[rgb(97,97,97)] text-[rgb(97,97,97)] grid-cols-[auto] min-h-[auto] min-w-[auto] outline-[rgb(97,97,97)] decoration-[rgb(97,97,97)] text-ellipsis origin-[200px_26.5px] select-none flex text-center max-w-[381px] mt-[12px] pt-[16px] px-[2px] border-[rgb(97,97,97)] border-0 max-sm:w-screen max-sm:max-w-[274px] max-sm:text-[12px] max-sm:mx-auto">
                  <p>
                    We will send you email updates when we release new features
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>{" "}
      <style jsx>{`
        .section {
          width: 100%;
          align-self: stretch;
          flex-grow: 1;
          max-width: 1200px;
          display: flex;
          flex-direction: column;
          margin-left: auto;
          margin-right: auto;
        }
      `}</style>{" "}
    </>
  );
}