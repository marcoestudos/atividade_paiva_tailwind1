'use client';

import 'bootstrap-icons/font/bootstrap-icons.css';
import dados from './json/json.json';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full bg-slate-100">
      
      <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col p-6 gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold">
            G
          </div>
          <h1 className="text-xl font-bold text-white">grammarly</h1>
        </div>

        <nav className="flex flex-col gap-4 mt-6">
          <a href="#" className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition">
            <i className="bi bi-house text-lg"></i>
            <span>Visão geral</span>
          </a>

          <a href="#" className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition">
            <i className="bi bi-gear text-lg"></i>
            <span>Configurações</span>
          </a>

          <a href="#" className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition">
            <i className="bi bi-people-fill text-lg"></i>
            <span>Usuários</span>
          </a>

          <a href="#" className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition">
            <i className="bi bi-list-check text-lg"></i>
            <span>Ordem de serviços</span>
          </a>
        </nav>
      </aside>

      <main className="flex-1 flex flex-col">

        <header className="bg-white border-b border-slate-200 px-8 py-4 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <i className="bi bi-hdd-stack text-lg text-slate-600"></i>
            <span className="text-slate-800 font-semibold text-lg">Movimento Financeiro</span>
          </div>
        </header>

        <div className="p-8 flex flex-col gap-8">
          
          <section className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-slate-800">
              Bom dia, <strong>{dados.usuario}</strong>!
            </h1>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-slate-600">
                <i className="bi bi-bell-fill text-lg"></i>
                <span className="text-xs font-bold">+3</span>
              </div>
              <button 
                type="button" 
                className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg shadow transition cursor-pointer"
              >
                + Nova Ordem
              </button>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-6 flex flex-col justify-between h-40 hover:bg-slate-50">
              <div className="flex items-center gap-3">
                <i className="bi bi-calendar-check text-2xl text-emerald-600"></i>
                <h2 className="text-lg font-bold text-slate-800">Concluídas</h2>
              </div>
              <span className="text-3xl text-emerald-600 font-bold">
                {dados.ordensServico.filter((ordem) => ordem.status === "concluida").length}
              </span> 
            </div>

            <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-6 flex flex-col justify-between h-40 hover:bg-slate-50">
              <div className="flex items-center gap-3">
                <i className="bi bi-hand-thumbs-up text-2xl text-amber-500"></i>
                <h2 className="text-lg font-bold text-slate-800">Paradas</h2>
              </div>
              <span className="text-3xl text-amber-500 font-bold">
                {dados.ordensServico.filter((ordem) => ordem.status === "parado").length}
              </span> 
            </div>

            <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-6 flex flex-col justify-between h-40 hover:bg-slate-50">
              <div className="flex items-center gap-3">
                <i className="bi bi-hand-thumbs-up text-2xl text-rose-600"></i>
                <h2 className="text-lg font-bold text-slate-800">Vencidas</h2>
              </div>
              <span className="text-3xl text-rose-600 font-bold">
                {dados.ordensServico.filter((ordem) => ordem.status === "vencida").length}
              </span> 
            </div>

          </section>

          <section className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h1 className="text-xl font-bold text-black mb-4">
              Ordens que exigem atenção
            </h1>

            <div className="flex flex-wrap gap-4 mb-6">
              <input
                placeholder="Buscar ordem, equipamento ou técnico"
                className="border border-black p-2 w-80 rounded-lg text-black"
              />

              <select
                defaultValue=""
                className="p-2 border border-blue-800 rounded-lg text-black"
              >
                <option value="" disabled>
                  Todos os status
                </option>
                <option value="vencida">Vencida</option>
                <option value="em_andamento">Em andamento</option>
                <option value="aberta">Aberta</option>
                <option value="planejada">Planejada</option>
                <option value="concluida">Concluída</option>
              </select>

              <select
                defaultValue=""
                className="p-2 border border-blue rounded-lg text-black"
              >
                <option value="" disabled>
                  Todas as prioridades
                </option>
                <option value="urgente">Urgente</option>
                <option value="alta">Alta</option>
                <option value="preventiva">Preventiva</option>
                <option value="media">Média</option>
              </select>
            </div>

            {/* Tabela com a estrutura de bordas solicitada */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="text-black border-b">
                  <tr>
                    <th className="p-3 text-center">Select</th>
                    <th className="p-3">Código</th>
                    <th className="p-3">Descrição</th>
                    <th className="p-3">Equipamento</th>
                    <th className="p-3">Prioridade</th>
                    <th className="p-3">Técnico</th>
                    <th className="p-3">Vencimento</th>
                    <th className="p-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {dados.ordensServico.map((ordem) => {
                    const equipamento = dados.equipamentos.find(
                      (item) => item.id === ordem.equipamentoId
                    );

                    return (
                      <tr key={ordem.id} className="border hover:bg-slate-100 text-slate-700">
                        <td className="border p-3 text-center">
                          <input type="checkbox" className="w-5 h-5"/>
                        </td>

                        <td className="border p-3">
                          {ordem.codigo}
                        </td>

                        <td className="border p-3">
                          {ordem.descricao}
                        </td>

                        <td className="border p-3">
                          <div>
                            <strong>{equipamento?.codigo}</strong>
                            <p className="text-sm">
                              {equipamento?.nome}
                            </p>
                          </div>
                        </td>

                        <td className="border p-3 capitalize">
                          {ordem.prioridade}
                        </td>

                        <td className="border p-3">
                          {ordem.tecnico}
                        </td>

                        <td className="border p-3">
                          {ordem.vencimento}
                        </td>

                        <td className="border p-3 capitalize">
                          {ordem.status}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>

        </div>
      </main>

    </div>
  );
}