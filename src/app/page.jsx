

 const HomePage = () => {
  return (
    <div className="flex flex-row-reverse justify-between">
      <div className="my-3   flex-grow: 1;" >
        {/*aqui estara la tabla */}
        <h3 className="text-center text-3xl font-bold m-3">Nombre de la tabla</h3>
        <table>
          <thead>
            <tr>
              <th>Nombre de Catedra</th>
              <th>adscrita a</th>
              <th>fecha de fundada</th>
              <th>Evaluación otorgada por el Consejo de Dirección (E, B, R)</th>
              <th>Propuesta a nombramiento ministerial</th>
              <th>Repositorios bibliográfico y documental</th>
              <th>Interacción y colaboración con otras Cátedras </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              
            </tr>
          </tbody>
        </table>
      </div>
      <div className=" bg-red-500 w-48">
        {/* aqui estara el menu de hamburgesa */}
        sd
      </div>
    </div>
  )
}
export default HomePage
