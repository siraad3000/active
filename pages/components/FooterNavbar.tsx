export default function FooterNavbar() {
  return (
   
      <footer className=" fixed bottom-0 z-10 flex justify-center w-full h-16 bg-active-white">
        
            <button
              type="button"
              className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="none"
              >
                <path
                  fill="#611087"
                  fill-rule="evenodd"
                  d="M6.154 11.814c-.32.696-.32 1.488-.32 3.072v4.947c0 2.2 0 3.3.683 3.984.639.638 1.641.68 3.566.683v-5.833c0-1.197.97-2.167 2.167-2.167h3.5c1.197 0 2.167.97 2.167 2.167V24.5c1.925-.003 2.927-.045 3.566-.683.684-.684.684-1.784.684-3.984v-4.947c0-1.584 0-2.376-.32-3.072-.32-.696-.922-1.212-2.125-2.243l-1.166-1C16.382 6.708 15.295 5.776 14 5.776s-2.382.932-4.556 2.795l-1.166 1c-1.203 1.031-1.804 1.547-2.124 2.243ZM15.917 24.5v-5.833a.167.167 0 0 0-.167-.167h-3.5a.167.167 0 0 0-.167.167V24.5h3.834Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-500">
                Hem
              </span>
            </button>
            <button
              type="button"
              className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
              >
                <path
                  stroke="#611087"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4 17 5 1 .75-1.5M15 21v-4l-4-3 1-6m0-4a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"
                />
                <path
                  stroke="#611087"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 12V9l5-1 3 3 3 1"
                />
              </svg>
              <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-500">
                Aktiviteter
              </span>
            </button>
            <button
              type="button"
              className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="none"
              >
                <circle
                  cx="14"
                  cy="9.333"
                  r="4.167"
                  stroke="#611087"
                  stroke-linecap="round"
                />
                <path
                  stroke="#611087"
                  d="M16.147 5.792a3.584 3.584 0 1 1 1.311 4.895M11.853 5.792a3.584 3.584 0 1 0-1.311 4.895"
                />
                <path
                  stroke="#611087"
                  stroke-linecap="round"
                  d="M14 15.667c3.04 0 4.839 1.178 5.927 2.576 1.108 1.422 1.514 3.115 1.66 4.164.029.21-.133.426-.42.426H6.833c-.287 0-.449-.217-.42-.426.146-1.049.552-2.742 1.66-4.164C9.16 16.845 10.96 15.667 14 15.667Z"
                />
                <path
                  fill="#611087"
                  d="m24.476 18.645-.472.164.472-.164ZM14 15.251l-.3-.4-1.004.755 1.247.142.057-.497Zm6.877 4.511-.461.194.129.306h.332v-.5ZM18.053 14.5c1.979 0 3.318.691 4.233 1.558.927.877 1.443 1.957 1.718 2.751l.945-.327c-.305-.882-.89-2.124-1.976-3.15-1.096-1.038-2.679-1.832-4.92-1.832v1ZM14.3 15.651c.883-.663 2.09-1.151 3.753-1.151v-1c-1.876 0-3.294.556-4.353 1.352l.6.8Zm-.357.097c4.132.471 5.787 2.583 6.473 4.208l.921-.388c-.814-1.932-2.762-4.298-7.28-4.813l-.114.993Zm9.672 3.514h-2.738v1h2.738v-1Zm.389-.453c.041.12.016.22-.047.3a.43.43 0 0 1-.342.153v1c.893 0 1.665-.825 1.334-1.78l-.945.327Z"
                />
                <path
                  fill="#611087"
                  d="m14 15.251.057.497 1.247-.142-1.004-.754-.3.4ZM3.524 18.645l.472.164-.472-.164Zm3.6 1.117v.5h.331l.13-.306-.462-.194ZM9.946 14.5c1.663 0 2.87.488 3.753 1.151l.6-.8c-1.059-.795-2.477-1.351-4.353-1.351v1Zm-5.95 4.309c.274-.794.79-1.874 1.717-2.751.915-.867 2.254-1.558 4.233-1.558v-1c-2.241 0-3.824.794-4.92 1.831-1.085 1.027-1.67 2.27-1.976 3.15l.945.328Zm.388.453a.431.431 0 0 1-.342-.153.302.302 0 0 1-.047-.3l-.945-.327c-.33.956.44 1.78 1.334 1.78v-1Zm2.738 0H4.385v1h2.738v-1Zm.461.694c.686-1.625 2.34-3.737 6.473-4.208l-.114-.993c-4.518.515-6.466 2.88-7.28 4.813l.921.388Z"
                />
              </svg>
              <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-500">
              <a href="/friends">Vänner</a>
              </span>
            </button>
          
      </footer>
   
  );
}
