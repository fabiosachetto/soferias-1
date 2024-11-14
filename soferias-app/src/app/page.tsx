export default function Home() {
  return (
    <div className="xl:columns-2 mb:columns-1 xl:flex mb:contents min-h-full justify-center py-12">

      <div className="xl:mr-1.5 mb:mr-0 xl:mb-0 mb:mb-3 rounded-lg text-white bg-blue-500/70 xl:w-2/5 mb:w-auto">
        <div className="p-6">
          <h1 className="text-3xl mb-5">Só Férias Paraty</h1>
          <h2 className="text-2xl mb-10">Venha Conhecer Paraty</h2>
          <p>
            Paraty é uma pequena cidade com montanhas como pano de fundo na Costa Verde do Brasil, entre o Rio de Janeiro e São Paulo. O seu centro colonial português possui ruas calcetadas e edifícios dos séculos XVII e XVIII da altura em que funcionava como um porto, durante o ciclo do ouro brasileiro. Entre os seus pontos de referência arquitetónicos encontra-se a Capela de Santa Rita à beira-mar, uma igreja caiada construída em 1722.
          </p>
        </div>
      </div>

      <div className="xl:ml-1.5 mb:ml-0 rounded-lg bg-white bg-opacity-70 xl:w-2/5 mb:w-auto">
        <div className="p-6">
          <div className="">
            <h2 className="mt-10 text-2xl/9 font-bold tracking-tight text-blue-500">
              Procure Disponibilidade
            </h2>
            <p className="text-gray-900">Verifique no filtro abaixo a disponibilade das suítes que mais lhe agradar.</p>
          </div>

          <div className="mt-10 ">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="select" className="block text-sm/6 font-medium text-gray-900">
                  Número de Pessoas
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    id="number"
                    name="number"
                    className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="w-full grid grid-cols-2">
                <div className="">
                  <div className="flex items-center justify-between">
                    <label htmlFor="date" className="block text-sm/6 font-medium text-gray-900">
                      Check-in
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="date"
                      name="date"
                      type="date"
                      className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="ml-1.5">
                  <div className="flex items-center justify-between">
                    <label htmlFor="date" className="block text-sm/6 font-medium text-gray-900">
                      Check-out
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="date"
                      name="date"
                      type="date"
                      className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    />
                  </div>
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
    </div>
  );
}
