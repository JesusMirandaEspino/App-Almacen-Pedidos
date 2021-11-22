/*******************************/
/*        Interfaces           */
/*******************************/

/*Store*/
export interface SucursalTipo {
  sucursal: string;
  franquicia: string;
}

/*cities*/
export interface Municipios {
  nombreMunicipio: string;
  acumuladoMontoCliente: string;
  AcumuladoPedidos: string;
}

/*Incidencias*/
export interface Incidencias {
  faltante: number;
  sobrante: number;
  daño: number;
}

/*Sucursal*/
export interface Sucursal {
  nombreSucursal: string;
  acumuladoMontoCliente: number;
  acumuladoPedidos: number;
  acumuladoIncidencias: number;
  acumuladoMontoTienda: number;
  tipo: SucursalTipo;
}

/*Estatus Pedido*/
export interface EstatusPedido {
  enOrder: boolean;
  enSurtido: boolean;
  enRuta: boolean;
  enEmbarque: boolean;
  entregado: boolean;
}

/*Chofer*/
export interface Chofer {
  nombreChofer: string;
  acumuladoMonto: number;
  acumuladoPedidos: number;
  acumuladoKm: number;
  acumuladoHoras: number;
}

/*Copiloto*/
export interface Copiloto {
  nombreChofer: string;
  acumuladoMonto: number;
  acumuladoPedidos: number;
  acumuladoKm: number;
  acumuladoHoras: number;
}

/*Unidad*/
export interface Unidad {
  nombreUnidad: string;
  acumuladoMonto: number;
  acumuladoPedidos: number;
  acumuladoKm: number;
  acumuladoHoras: number;
}

/*Tipo Pedido*/
export interface TipoPedido {
  sucursal: Sucursal;
  clienteDomicilio: boolean;
  clienteRecoge: boolean;
}

/*Pedido*/
export interface Pedido {
  nombreCliente: string;
  numero: number;
  sucursal: Sucursal;
  factura: number;
  embarque: number;
  piezas: number;
  monto: number;
  montoIVA: number;
  status: EstatusPedido;
  domicilio: string;
  incidencia: Incidencias;
  chofer: Chofer;
  copiloto: Copiloto;
  unidad: Unidad;
  horaSalidad: number;
  kmSalida: number;
  horaLlegada: number;
  kmLlegada: number;
  recibe: string;
  anotaciones: string;
  usoCFDI: string;
  numeroCuanta: number;
  fechaEmision: Date;
  fechaEntrega: Date;
  horaPreferente: string;
  telefono: number;
  clabe: string;
  observaciones: string;
  condiciones: string;
  tipoPedido: TipoPedido;
}
