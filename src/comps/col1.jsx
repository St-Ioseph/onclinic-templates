import React from "react";

const Col1 = () => {
  return (
    <div className="flex flex-col gap-4">
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
                  d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
                />
              </svg>{" "}
              Vista previa
            </span>{" "}
            <span className="link text-xs">más</span>
          </h2>{" "}
          <div>
            <span className="badge badge-soft">
              Zapatos{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-3"
              >
                <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
              </svg>
            </span>{" "}
            <span className="badge badge-soft">
              Bolsos{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-3"
              >
                <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
              </svg>
            </span>
          </div>{" "}
          <div className="flex flex-col">
            <div className="border-b-base-content/5 flex items-center justify-between gap-2 border-b border-dashed py-2">
              <label className="flex cursor-pointer items-center gap-2 select-none">
                <input
                  type="checkbox"
                  className="checkbox checkbox-sm"
                  defaultChecked=""
                />{" "}
                <span>Sudaderas</span>
              </label>{" "}
              <span className="badge badge-xs badge-neutral font-mono">25</span>
            </div>{" "}
            <div className="border-b-base-content/5 flex items-center justify-between gap-2 border-b border-dashed py-2">
              <label className="flex cursor-pointer items-center gap-2 select-none">
                <input
                  type="checkbox"
                  className="checkbox checkbox-sm"
                  defaultChecked=""
                />{" "}
                <span>Bolsos</span>
              </label>{" "}
              <span className="badge badge-xs badge-neutral font-mono">3</span>
            </div>{" "}
            <div className="border-b-base-content/5 flex items-center justify-between gap-2 border-b border-dashed py-2">
              <label className="flex cursor-pointer items-center gap-2 select-none">
                <input type="checkbox" className="checkbox checkbox-sm" />{" "}
                <span>Zapatos</span>
              </label>{" "}
              <span className="badge badge-xs badge-warning font-mono">0</span>
            </div>{" "}
            <div className="border-b-base-content/5 flex items-center justify-between gap-2 border-b border-dashed py-2">
              <label className="flex cursor-pointer items-center gap-2 select-none">
                <input type="checkbox" className="checkbox checkbox-sm" />{" "}
                <span>Accesorios</span>
              </label>{" "}
              <span className="badge badge-xs badge-neutral font-mono">4</span>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="card bg-base-100 card-border border-base-300 card-sm overflow-hidden">
        <div className="card-body gap-4">
          <div className="border-b-base-300 grid grid-cols-7 border-b border-dashed pb-3">
            <div className="rounded-field flex flex-col items-center px-2 py-1">
              <span className="text-sm font-semibold">12</span>{" "}
              <span className="text-[10px] font-semibold opacity-50">L</span>
            </div>{" "}
            <div className="rounded-field flex flex-col items-center px-2 py-1">
              <span className="text-sm font-semibold">13</span>{" "}
              <span className="text-[10px] font-semibold opacity-50">M</span>
            </div>{" "}
            <div className="rounded-field bg-primary text-primary-content flex flex-col items-center px-2 py-1">
              <span className="text-sm font-semibold">14</span>{" "}
              <span className="text-[10px] font-semibold opacity-50">M</span>
            </div>{" "}
            <div className="rounded-field flex flex-col items-center px-2 py-1">
              <span className="text-sm font-semibold">15</span>{" "}
              <span className="text-[10px] font-semibold opacity-50">J</span>
            </div>{" "}
            <div className="rounded-field flex flex-col items-center px-2 py-1">
              <span className="text-sm font-semibold">16</span>{" "}
              <span className="text-[10px] font-semibold opacity-50">V</span>
            </div>{" "}
            <div className="rounded-field flex flex-col items-center px-2 py-1">
              <span className="text-sm font-semibold">17</span>{" "}
              <span className="text-[10px] font-semibold opacity-50">S</span>
            </div>{" "}
            <div className="rounded-field flex flex-col items-center px-2 py-1">
              <span className="text-sm font-semibold">18</span>{" "}
              <span className="text-[10px] font-semibold opacity-50">D</span>
            </div>
          </div>{" "}
          <div>
            <label className="input input-sm input-border flex w-auto items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-4"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>{" "}
              <input type="text" placeholder="Buscar eventos" />
            </label>
          </div>{" "}
          <div className="flex flex-col gap-2">
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="checkbox"
                className="toggle toggle-sm toggle-primary"
                defaultChecked=""
              />{" "}
              <span className="text-xs">Mostrar eventos de todo el día</span>
            </label>
          </div>
        </div>{" "}
        <div className="bg-base-300">
          <div className="flex items-center gap-2 p-4">
            <div className="grow">
              <div className="text-sm font-medium">Reunión de Sincronización del Equipo</div>{" "}
              <div className="text-xs opacity-60">
                Revisión semanal de producto con los equipos de diseño y desarrollo
              </div>
            </div>{" "}
            <div className="shrink-0">
              <span className="badge badge-sm badge-neutral">1h</span>
            </div>
          </div>
        </div>
      </div>{" "}
      <div>
        <div role="tablist" className="tabs tabs-lift">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Pestaña 1"
          />{" "}
          <div className="tab-content bg-base-100 border-base-300 p-6">
            Contenido de pestaña 1
          </div>{" "}
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Pestaña 2"
            defaultChecked="checked"
          />{" "}
          <div className="tab-content bg-base-100 border-base-300 p-6">
            Contenido de pestaña 2
          </div>{" "}
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Pestaña 3"
          />{" "}
          <div className="tab-content bg-base-100 border-base-300 p-6">
            Contenido de pestaña 3
          </div>
        </div>
      </div>{" "}
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
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>{" "}
              Rango de precio
            </span>
          </h2>{" "}
          <div className="text-center text-5xl font-extralight">50</div>{" "}
          <input type="range" className="range range-sm" />
        </div>
      </div>{" "}
      <div className="card bg-base-100 card-border border-base-300 card-sm">
        <figure className="p-2">
          <img
            className="rounded-[calc(var(--radius-box)-.5rem)]"
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>{" "}
        <div className="card-body gap-4">
          <h2 className="flex items-center justify-between">
            <span className="font-semibold">Zapatos Nike</span>{" "}
            <span className="badge badge-success badge-sm">OFERTA</span>
          </h2>{" "}
          <div className="flex items-center gap-2">
            <div className="rating rating-xs">
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />{" "}
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />{" "}
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />{" "}
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />{" "}
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked=""
              />
            </div>{" "}
            <span className="text-xs opacity-60">420 reseñas</span>
          </div>{" "}
          <div>
            <span className="text-2xl font-semibold">$120</span>{" "}
            <span className="text-sm line-through opacity-60">$150</span>
          </div>
        </div>
      </div>{" "}
      <div className="card bg-base-100 card-border border-base-300 card-sm">
        <div className="card-body gap-4">
          <div className="join">
            <label className="join-item input-border input flex w-auto items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 shrink-0 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>{" "}
              <input type="text" className="grow" placeholder="Buscar" />
            </label>{" "}
            <button className="join-item btn btn-neutral">Encontrar</button>
          </div>
        </div>
      </div>{" "}
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
                    d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                  />
                </svg>{" "}
                Crear nueva cuenta
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="card-body gap-4">
          <p className="text-xs opacity-60">
            El registro es gratuito y solo toma un minuto
          </p>{" "}
          <div className="flex flex-col gap-1">
            <label className="input input-border flex max-w-none items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>{" "}
              <input type="text" className="grow" placeholder="Nombre de usuario" />
            </label>
          </div>{" "}
          <div className="flex flex-col gap-1">
            <label className="input input-border flex max-w-none items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>{" "}
              <input type="password" className="grow" placeholder="Contraseña" />
            </label>{" "}
            <span className="text-base-content/60 flex items-center gap-2 px-1 text-[0.6875rem]">
              <span className="status status-error inline-block" /> La contraseña
              debe tener 8+ caracteres
            </span>
          </div>{" "}
          <label className="text-base-content/60 flex items-center gap-2 text-xs">
            <input type="checkbox" className="toggle toggle-xs" /> Aceptar términos
            sin leer
          </label>{" "}
          <label className="text-base-content/60 flex items-center gap-2 text-xs">
            <input type="checkbox" className="toggle toggle-xs" /> Suscribirse a
            correos spam
          </label>{" "}
          <div className="card-actions items-center gap-6">
            <button className="btn btn-primary">Registrarse</button>{" "}
            <button className="link">ó Iniciar Sesión</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Col1;
