const Col2 = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="card bg-base-100 card-border border-base-300 card-sm">
        <div className="card-body gap-4">
          <div className="*:bg-base-content mt-4 flex h-24 items-end gap-2 *:w-full *:rounded-sm">
            <div style={{ height: "10%" }} /> <div style={{ height: "20%" }} />{" "}
            <div style={{ height: "10%" }} /> <div style={{ height: "25%" }} />{" "}
            <div style={{ height: "22%" }} /> <div style={{ height: "15%" }} />{" "}
            <div style={{ height: "20%" }} /> <div style={{ height: "35%" }} />{" "}
            <div style={{ height: "40%" }} /> <div style={{ height: "45%" }} />{" "}
            <div style={{ height: "30%" }} /> <div style={{ height: "35%" }} />{" "}
            <div style={{ height: "60%" }} /> <div style={{ height: "65%" }} />{" "}
            <div style={{ height: "80%" }} /> <div style={{ height: "90%" }} />
          </div>{" "}
          <p className="py-3 text-xs">
            El volumen de ventas alcanzó $12,450 esta semana, mostrando un
            aumento del 15% respecto al período anterior.
          </p>{" "}
          <div className="grid grid-cols-2 gap-2">
            <button className="btn">Gráficos</button>{" "}
            <button className="btn btn-neutral">Detalles</button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 card-border border-base-300 card-sm">
        <div className="card-body gap-4">
          <h2 className="flex items-center justify-between">
            <span className="flex items-center gap-2 font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 opacity-40"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                />
              </svg>{" "}
              Pedidos recientes
            </span>
          </h2>{" "}
          <div className="flex flex-col text-xs">
            <div className="border-t-base-content/5 flex items-center justify-between gap-2 border-t border-dashed py-2">
              Charlie Chapman{" "}
              <span className="badge badge-xs badge-info">Enviado</span>
            </div>{" "}
            <div className="border-t-base-content/5 flex items-center justify-between gap-2 border-t border-dashed py-2">
              Howard Hudson{" "}
              <span className="badge badge-xs badge-error">Fallido</span>
            </div>{" "}
            <div className="border-t-base-content/5 flex items-center justify-between gap-2 border-t border-dashed py-2">
              Fiona Fisher{" "}
              <span className="badge badge-xs badge-warning">En progreso</span>
            </div>{" "}
            <div className="border-t-base-content/5 flex items-center justify-between gap-2 border-t border-dashed py-2">
              Nick Nelson{" "}
              <span className="badge badge-xs badge-success">Completado</span>
            </div>{" "}
            <div className="border-t-base-content/5 flex items-center justify-between gap-2 border-t border-dashed py-2">
              Amanda Anderson{" "}
              <span className="badge badge-xs badge-success">Completado</span>
            </div>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 card-border border-base-300 w-full">
        <div className="stats bg-base-100 w-full overflow-hidden shadow-[0_.1rem_.5rem_-.3rem_#0003]">
          <div className="stat">
            <div className="stat-figure">
              <div
                className="radial-progress"
                style={{ "--value": 91, "--size": "3rem" }}
                role="progressbar"
              >
                91
              </div>
            </div>{" "}
            <div className="stat-title">Clientes Verificados</div>{" "}
            <div className="stat-value">
              91<span className="text-sm">/100</span>
            </div>{" "}
            <div className="stat-desc flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="text-success size-4"
              >
                <path
                  fillRule="evenodd"
                  d="M8.5 1.709a.75.75 0 0 0-1 0 8.963 8.963 0 0 1-4.84 2.217.75.75 0 0 0-.654.72 10.499 10.499 0 0 0 5.647 9.672.75.75 0 0 0 .694-.001 10.499 10.499 0 0 0 5.647-9.672.75.75 0 0 0-.654-.719A8.963 8.963 0 0 1 8.5 1.71Zm2.34 5.504a.75.75 0 0 0-1.18-.926L7.394 9.17l-1.156-.99a.75.75 0 1 0-.976 1.138l1.75 1.5a.75.75 0 0 0 1.078-.106l2.75-3.5Z"
                  clipRule="evenodd"
                ></path>
              </svg>{" "}
              Excelente
            </div>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 card-border border-base-300 w-full">
        <div className="stats">
          <div className="stat">
            <div className="stat-title">Ingresos de mayo</div>{" "}
            <div className="stat-value">$32,400</div>{" "}
            <div className="stat-desc flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="text-success size-4"
              >
                <path
                  fillRule="evenodd"
                  d="M9.808 4.057a.75.75 0 0 1 .92-.527l3.116.849a.75.75 0 0 1 .528.915l-.823 3.121a.75.75 0 0 1-1.45-.382l.337-1.281a23.484 23.484 0 0 0-3.609 3.056.75.75 0 0 1-1.07.01L6 8.06l-3.72 3.72a.75.75 0 1 1-1.06-1.061l4.25-4.25a.75.75 0 0 1 1.06 0l1.756 1.755a25.015 25.015 0 0 1 3.508-2.85l-1.46-.398a.75.75 0 0 1-.526-.92Z"
                  clipRule="evenodd"
                />
              </svg>{" "}
              21% más que el mes pasado
            </div>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 card-border border-base-300 card-sm overflow-hidden">
        <div className="border-base-300 border-b border-dashed">
          <div className="flex items-center gap-2 p-4">
            <div className="grow">
              <div className="flex items-center gap-2 text-sm font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 opacity-40"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>{" "}
                Escribir una nueva publicación
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="card-body gap-4">
          <div className="flex items-center justify-between">
            <div className="join">
              <input
                className="join-item btn btn-xs px-3 font-bold"
                type="checkbox"
                name="options"
                aria-label="B"
              />{" "}
              <input
                className="join-item btn btn-xs px-3 font-mono italic"
                type="checkbox"
                name="options"
                aria-label="I"
              />{" "}
              <input
                className="join-item btn btn-xs px-3 underline"
                type="checkbox"
                name="options"
                aria-label="U"
              />
            </div>{" "}
            <button className="btn btn-xs">Añadir archivos</button>
          </div>{" "}
          <textarea
            className="textarea textarea-border max-w-none resize-none"
            placeholder="¿Qué está pasando?"
            defaultValue={""}
          />{" "}
          <p className="px-2 text-xs opacity-40">1200 caracteres restantes</p>{" "}
          <div className="card-actions grid grid-cols-2">
            <button className="btn">Borrador</button>{" "}
            <button className="btn btn-primary">Publicar</button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 card-border border-base-300 card-sm overflow-hidden">
        <div className="card-body">
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-8 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/profile/demo/yellingwoman@94.webp"
                />
              </div>
            </div>{" "}
            <div className="chat-header">
              Obi-Wan Kenobi <time className="text-xs opacity-50">12:45</time>
            </div>{" "}
            <div className="chat-bubble chat-bubble-neutral">
              Se acabó Anakin
            </div>
          </div>{" "}
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-8 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/profile/demo/yellingwoman@94.webp"
                />
              </div>
            </div>{" "}
            <div className="chat-bubble chat-bubble-neutral">
              Estoy en terreno elevado
            </div>{" "}
            <div className="chat-footer opacity-50">Entregado</div>
          </div>{" "}
          <div className="chat chat-end">
            <div className="chat-image avatar">
              <div className="w-8 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/profile/demo/yellingcat@94.webp"
                />
              </div>
            </div>{" "}
            <div className="chat-bubble chat-bubble-neutral">
              Subestimas mi poder
            </div>{" "}
            <div className="chat-footer opacity-50">Visto a las 12:46</div>
          </div>
        </div>{" "}
        <div className="dock dock-sm bg-base-300 relative px-2">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
          </button>{" "}
          <button className="dock-active">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
              />
            </svg>
          </button>{" "}
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="card bg-base-100 card-border border-base-300">
        <ul className="menu w-full">
          <li className="menu-title">Panel de administración</li>{" "}
          <li>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 opacity-30"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                />
              </svg>{" "}
              Bases de datos <span className="badge justify-self-end">7</span>
            </span>
          </li>{" "}
          <li>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 opacity-30"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                />
              </svg>{" "}
              Productos
            </span>
          </li>{" "}
          <li>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 opacity-30"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>{" "}
              Mensajes <span className="badge justify-self-end">29</span>
            </span>
          </li>{" "}
          <li>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 opacity-30"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                />
              </svg>{" "}
              Tokens de acceso
            </span>
          </li>{" "}
          <li>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 opacity-30"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>{" "}
              Usuarios <span className="status status-info" />
            </span>
          </li>{" "}
          <li>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 opacity-30"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
                />
              </svg>{" "}
              Configuración
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Col2;
