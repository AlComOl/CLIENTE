import './StyleComponents/ComponetsNavStyle.css';

const Card = ({ texto, iconImg, altText, valor, comentario, children }) => {
  return (
    <div className="card1">
      <div className="texto">
        <p>{texto}</p>
        <img src={iconImg} alt={altText} />
      </div>

      <h5 className="value">{valor}</h5>

      <div>
        <p className="texto">{comentario}</p>
      </div>

      {/* Aquí se renderiza cualquier componente hijo */}
      {children}
    </div>
  );
};

const ShortCard = ({ titulo, texto }) => {
  return (
    <div className="cardShort">
      <h6>{titulo}</h6>
      <p>{texto}</p>
      <div>
        <button>Ver</button>
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div>
      <p>Resumen general de la gestión agrícola</p>

      <div className="primeraSeccion">
        <Card
          iconImg="./iconExplotacion.svg"
          altText="Explotaciones"
          texto="Explotaciones"
          valor="9"
          comentario="Total de Fincas"
        />

        <Card
          iconImg="./iconParcelas.svg"
          altText="parcelas"
          texto="Parcelas"
          valor="35"
          comentario="Total de Fincas"
        />

        <Card
          iconImg="./iconOperaciones.svg"
          altText="operaciones"
          texto="Operaciones"
          valor="34"
          comentario="Total Operaciones"
        />

        <Card
          iconImg="./iconAlmacen.svg"
          altText="Almacen"
          texto="Productos"
          valor="9"
          comentario="En almacén"
        />
      </div>

      <div className="segundaSeccion">
     
        <Card
          iconImg="./iconAlmacen.svg"
          altText="Alertas"
          texto="Alertas"
          valor="9"
          comentario="Requiere atención"
        >
          <ShortCard titulo="Nueva alerta" texto="Revisar fincas" />
        </Card>

        <Card
          iconImg="./iconAlmacen.svg"
          altText="Almacen"
          texto="Productos"
          valor="9"
          comentario="En almacén"
        >
          <ShortCard titulo="Nueva alerta" texto="Revisar fincas" />
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
