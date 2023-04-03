import { A } from "@solidjs/router";
import {
  Component,
  Show,
  createEffect,
  createSignal,
  onCleanup,
} from "solid-js";
import { Transition } from "solid-transition-group";
import { onClickOutside } from 'solidjs-use';

export const SearchModal: Component<{}> = (props) => {
  const [modalOpen, setModalOpen] = createSignal(false);
  const[target, setTarget] = createSignal(null);

    let modalContent, searchInput;
    
onClickOutside(target, event => {
    console.log(event)
    setModalOpen(false)
  })

  const keyHandler = ({ keyCode }) => {
    if (!modalOpen() || keyCode !== 27) return;
    setModalOpen(false);
  };

  createEffect(() => {
    console.log("model:", modalOpen());
  });
  // close on click outside

  // close if the esc key is pressed
  document.addEventListener("keydown", keyHandler);
  onCleanup(() => document.removeEventListener("keydown", keyHandler));

  createEffect(() => {
    if (modalOpen()) {
      searchInput.focus();
    }
  });

  return (
    <div>
      <button
        class={`w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition duration-150 rounded-full ml-3 ${
          modalOpen() && "bg-slate-200"
        }`}
        onClick={(e) => {
          setModalOpen(true);
          console.log("set model open ")
          return false;
        }}
        aria-controls="search-modal"
      >
        <span class="sr-only">Search</span>
        <svg
          class="w-4 h-4"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="fill-current text-slate-500"
            d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
          />
          <path
            class="fill-current text-slate-400"
            d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"
          />
        </svg>
      </button>

      <Transition
        enterClass="transition ease-in-out duration-1000"
        exitToClass="opacity-100 translate-y-0"
      >
        <Show when={modalOpen()} fallback={<></>}>
          <div class="fixed inset-0 z-50 overflow-hidden flex items-start top-20 mb-4 justify-center px-4 sm:px-6">
            <div
              ref={setTarget}
              class="bg-white overflow-auto max-w-2xl w-full max-h-full rounded shadow-lg"
            >
              {/* Search form */}
              <form class="border-b border-slate-200">
                <div class="relative">
                  <label class="sr-only">Search</label>
                  <input
                    class="w-full border-0 focus:ring-transparent placeholder-slate-400 appearance-none py-3 pl-10 pr-4"
                    type="search"
                    placeholder="Search Anything…"
                    ref={searchInput}
                  />
                  <button
                    class="absolute inset-0 right-auto group"
                    type="submit"
                    aria-label="Search"
                  >
                    <svg
                      class="w-4 h-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-4 mr-2"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                      <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                    </svg>
                  </button>
                </div>
              </form>
              <div class="py-4 px-2">
                {/* Recent searches */}
                <div class="mb-3 last:mb-0">
                  <div class="text-xs font-semibold text-slate-400 uppercase px-2 mb-2">
                    Recent searches
                  </div>
                  <ul class="text-sm">
                    <li>
                      <A
                        class="flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group"
                        href="#0"
                        onClick={() => setModalOpen(!modalOpen())}
                      >
                        <svg
                          class="w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
                        </svg>
                        <span>Form Builder - 23 hours on-demand video</span>
                      </A>
                    </li>
                    <li>
                      <A
                        class="flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group"
                        href="#0"
                        onClick={() => setModalOpen(!modalOpen())}
                      >
                        <svg
                          class="w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
                        </svg>
                        <span>Access Mosaic on mobile and TV</span>
                      </A>
                    </li>
                    <li>
                      <A
                        class="flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group"
                        href="#0"
                        onClick={() => setModalOpen(!modalOpen)}
                      >
                        <svg
                          class="w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
                        </svg>
                        <span>Product Update - Q4 2021</span>
                      </A>
                    </li>
                    <li>
                      <A
                        class="flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group"
                        href="#0"
                        onClick={() => setModalOpen(!modalOpen())}
                      >
                        <svg
                          class="w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
                        </svg>
                        <span>Master Digital Marketing Strategy course</span>
                      </A>
                    </li>
                    <li>
                      <A
                        class="flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group"
                        href="#0"
                        onClick={() => setModalOpen(!modalOpen())}
                      >
                        <svg
                          class="w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
                        </svg>
                        <span>Dedicated forms for products</span>
                      </A>
                    </li>
                    <li>
                      <A
                        class="flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group"
                        href="#0"
                        onClick={() => setModalOpen(!modalOpen())}
                      >
                        <svg
                          class="w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
                        </svg>
                        <span>Product Update - Q4 2021</span>
                      </A>
                    </li>
                  </ul>
                </div>
                {/* Recent pages */}
                <div class="mb-3 last:mb-0">
                  <div class="text-xs font-semibold text-slate-400 uppercase px-2 mb-2">
                    Recent pages
                  </div>
                  <ul class="text-sm">
                    <li>
                      <A
                        class="flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group"
                        href="#0"
                        onClick={() => setModalOpen(!modalOpen())}
                      >
                        <svg
                          class="w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3"
                          viewBox="0 0 16 16"
                        >
                          <path d="M14 0H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h8l5-5V1c0-.6-.4-1-1-1zM3 2h10v8H9v4H3V2z" />
                        </svg>
                        <span>
                          <span class="font-medium text-slate-800 group-hover:text-white">
                            Messages
                          </span>{" "}
                          - Conversation / … / Mike Mills
                        </span>
                      </A>
                    </li>
                    <li>
                      <A
                        class="flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group"
                        href="#0"
                        onClick={() => setModalOpen(!modalOpen())}
                      >
                        <svg
                          class="w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3"
                          viewBox="0 0 16 16"
                        >
                          <path d="M14 0H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h8l5-5V1c0-.6-.4-1-1-1zM3 2h10v8H9v4H3V2z" />
                        </svg>
                        <span>
                          <span class="font-medium text-slate-800 group-hover:text-white">
                            Messages
                          </span>{" "}
                          - Conversation / … / Eva Patrick
                        </span>
                      </A>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Show>
      </Transition>
    </div>
  );
};

