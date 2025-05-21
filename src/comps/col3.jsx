const Col3 = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="card bg-base-100 card-border border-base-300 card-sm overflow-hidden">
        <div className="card-body my-2">
          <div className="flex items-center justify-around">
            <button className="btn btn-square btn-neutral">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4 shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z"
                />
              </svg>
            </button>{" "}
            <button className="btn btn-square btn-neutral btn-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                />
              </svg>
            </button>{" "}
            <button className="btn btn-square btn-neutral">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4 shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z"
                />
              </svg>
            </button>
          </div>{" "}
          <div className="mt-2 text-center">
            <h6 className="text-sm font-bold">PM Llamada Zoom ASMR</h6>{" "}
            <p className="text-xs opacity-50">
              Gerente de Proyecto hablando por 2 horas
            </p>
          </div>
        </div>{" "}
        <div className="border-base-300 flex flex-col border-t px-6 py-4">
          <div className="relative mt-6">
            <div
              className="tooltip tooltip-open absolute top-2 before:text-xs"
              style={{ insetInlineStart: "10%" }}
              data-tip="13:39"
            />{" "}
            <progress className="progress" value={10} max={100} />
          </div>{" "}
          <div className="flex justify-between text-xs opacity-50">
            <span>13:39</span> <span>120:00</span>
          </div>
        </div>{" "}
        <div className="flex items-center justify-around px-2 pb-6">
          <button className="btn btn-square">
            <svg
              width={16}
              height={16}
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 6V42C17 42 11.7985 32.8391 11.7985 32.8391H6C4.89543 32.8391 4 31.9437 4 30.8391V17.0108C4 15.9062 4.89543 15.0108 6 15.0108H11.7985C11.7985 15.0108 17 6 24 6Z"
                fill="none"
                stroke="currentColor"
                strokeWidth={4}
                strokeLinejoin="round"
              />
              <path
                d="M32 15L32 15C32.6232 15.5565 33.1881 16.1797 33.6841 16.8588C35.1387 18.8504 36 21.3223 36 24C36 26.6545 35.1535 29.1067 33.7218 31.0893C33.2168 31.7885 32.6391 32.4293 32 33"
                stroke="currentColor"
                strokeWidth={4}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>{" "}
          <button className="btn btn-square">
            <svg
              width={16}
              height={16}
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40 33L44 37L40 41"
                stroke="currentColor"
                strokeWidth={4}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M40 7L44 11L40 15"
                stroke="currentColor"
                strokeWidth={4}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M44 11H37C29.8203 11 24 16.8203 24 24C24 31.1797 29.8203 37 37 37H44"
                stroke="currentColor"
                strokeWidth={4}
                strokeLinecap="round"
              />
              <path
                d="M4 37H11C18.1797 37 24 31.1797 24 24C24 16.8203 18.1797 11 11 11H4"
                stroke="currentColor"
                strokeWidth={4}
                strokeLinecap="round"
              />
            </svg>
          </button>{" "}
          <button className="btn btn-square">
            <svg
              width={16}
              height={16}
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 25C4 18.3502 9.39624 13 16 13H44"
                stroke="currentColor"
                strokeWidth={4}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M38 7L44 13L38 19"
                stroke="currentColor"
                strokeWidth={4}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M44 23C44 29.6498 38.6038 35 32 35H4"
                stroke="currentColor"
                strokeWidth={4}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 41L4 35L10 29"
                stroke="currentColor"
                strokeWidth={4}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>{" "}
          <button className="btn btn-square">
            <svg
              width={16}
              height={16}
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M42 30V24.4615C42 14.2655 33.9411 6 24 6C14.0589 6 6 14.2655 6 24.4615V30"
                stroke="currentColor"
                strokeWidth={4}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M34 32C34 29.7909 35.7909 28 38 28H42V42H38C35.7909 42 34 40.2091 34 38V32Z"
                fill="none"
                stroke="currentColor"
                strokeWidth={4}
                strokeLinejoin="round"
              />
              <path
                d="M42 32H44C45.1046 32 46 32.8954 46 34V36C46 37.1046 45.1046 38 44 38H42V32Z"
                fill="currentColor"
              />
              <path
                d="M6 32H4C2.89543 32 2 32.8954 2 34V36C2 37.1046 2.89543 38 4 38H6V32Z"
                fill="currentColor"
              />
              <path
                d="M6 28H10C12.2091 28 14 29.7909 14 32V38C14 40.2091 12.2091 42 10 42H6V28Z"
                fill="none"
                stroke="currentColor"
                strokeWidth={4}
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>{" "}

      <div className="flex flex-col gap-4">
        <div className="alert max-sm:alert-vertical alert-info text-xs font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"
            />
          </svg>{" "}
          Hay 9 mensajes nuevos
        </div>{" "}
        <div className="alert alert-outline max-sm:alert-vertical alert-success text-xs font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
            />
          </svg>{" "}
          Proceso de verificación completado
        </div>{" "}
        <div className="alert alert-dash max-sm:alert-vertical alert-warning text-xs font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z"
            />
          </svg>{" "}
          <span>
            <span className="link">Clic</span> para verificar tu correo electrónico
          </span>
        </div>{" "}
        <div className="alert alert-soft max-sm:alert-vertical alert-error text-xs font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>{" "}
          Acceso denegado{" "}
          <button className="btn btn-xs btn-ghost">Soporte</button>
        </div>
      </div>{" "}
      <ul className="timeline timeline-vertical timeline-compact">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-primary h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>{" "}
          <div className="timeline-end timeline-box">
            Harry Potter y la Pila Filosofal
          </div>{" "}
          <hr className="bg-primary" />
        </li>{" "}
        <li>
          <hr className="bg-primary" />{" "}
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-primary h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>{" "}
          <div className="timeline-end timeline-box">
            Harry Potter y la Cámara de los Servidores
          </div>{" "}
          <hr className="bg-primary" />
        </li>{" "}
        <li>
          <hr className="bg-primary" />{" "}
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-primary h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>{" "}
          <div className="timeline-end timeline-box">
            Harry Potter y el Prisionero de Azure
          </div>{" "}
          <hr className="bg-primary" />
        </li>{" "}
        <li>
          <hr className="bg-primary" />{" "}
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-primary h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>{" "}
          <div className="timeline-end timeline-box">
            Harry Potter y el Cáliz de Firebase
          </div>{" "}
          <hr />
        </li>{" "}
        <li>
          <hr />{" "}
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>{" "}
          <div className="timeline-end timeline-box">
            Harry Potter y el Elixir de Phoenix
          </div>{" "}
          <hr />
        </li>{" "}
        <li>
          <hr />{" "}
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>{" "}
          <div className="timeline-end timeline-box">
            Harry Potter y la App Semi-Desplegada
          </div>{" "}
          <hr />
        </li>{" "}
        <li>
          <hr />{" "}
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>{" "}
          <div className="timeline-end timeline-box">
            Harry Potter y las Frameworks de la Muerte
          </div>
        </li>
      </ul>{" "}
      <div className="card bg-base-100 card-border border-base-300 from-base-content/5 bg-linear-to-bl to-50%">
        <div className="flex justify-center">
          <div className="tabs tabs-box bg-base-300 m-4 inline-flex flex-nowrap">
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab w-1/2"
              aria-label="Mensual"
            />{" "}
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab w-full"
              aria-label="Anual"
              defaultChecked=""
            />{" "}
            <div className="indicator w-1/2">
              <div className="indicator-item badge badge-warning badge-xs">
                OFERTA
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="card-body gap-4">
          <div className="flex flex-col">
            <h4 className="font-bold tracking-wide opacity-50">Plan Inicial</h4>{" "}
            <div>
              <span className="text-4xl font-black">$200</span>
              <span className="opacity-50">/mes</span>
            </div>
          </div>{" "}
          <div className="my-2 flex flex-col text-xs">
            <div className="border-b-accent/5 flex items-center gap-2 border-b pb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="text-success size-4"
              >
                <path
                  fillRule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z"
                  clipRule="evenodd"
                />
              </svg>{" "}
              20 Tokens por día
            </div>{" "}
            <div className="border-b-accent/5 flex items-center gap-2 border-b pb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="text-success size-4"
              >
                <path
                  fillRule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z"
                  clipRule="evenodd"
                />
              </svg>{" "}
              10 Proyectos
            </div>{" "}
            <div className="border-b-accent/5 flex items-center gap-2 border-b pb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="text-success size-4"
              >
                <path
                  fillRule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z"
                  clipRule="evenodd"
                />
              </svg>{" "}
              Acceso API
            </div>{" "}
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="text-error size-4"
              >
                <path
                  fillRule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm2.78-4.22a.75.75 0 0 1-1.06 0L8 9.06l-1.72 1.72a.75.75 0 1 1-1.06-1.06L6.94 8 5.22 6.28a.75.75 0 0 1 1.06-1.06L8 6.94l1.72-1.72a.75.75 0 1 1 1.06 1.06L9.06 8l1.72 1.72a.75.75 0 0 1 0 1.06Z"
                  clipRule="evenodd"
                />
              </svg>{" "}
              Soporte Prioritario
            </div>
          </div>{" "}
          <button className="btn btn-accent">Comprar</button>
        </div>
      </div>
    </div>
  );
};

export default Col3;
