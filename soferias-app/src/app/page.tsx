export default function Home() {
  return (
    <div className="columns-2 flex min-h-full justify-center px-6 py-12 lg:px-8">
      <div className="text-white bg-opacity-70 w-2/5">
        <h1 className="text-3xl">Contato.</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>

      <div className="rounded-lg bg-white bg-opacity-70 w-2/5">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-2xl/9 font-bold tracking-tight text-blue-500">
            Procure Disponibilidade
          </h2>
          <p>Verifique no filtro abaixo a disponibilade das suítes que mais lhe agradar.</p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="select" className="block text-sm/6 font-medium text-gray-900">
                Número de Pessoas
              </label>
              <div className="mt-2">
                <select
                  id="select"
                  name="select"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="date" className="block text-sm/6 font-medium text-gray-900">
                  Dia Procurado
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="date"
                  name="date"
                  type="date"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="pb-10">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md border-blue-800 hover:border-blue-500 bg-blue-500 hover:bg-blue-800 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Buscar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
