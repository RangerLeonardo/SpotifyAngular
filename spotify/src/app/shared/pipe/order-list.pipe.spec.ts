import { OrderListPipe } from './order-list.pipe';
import * as mockRaw from "../../data/tracks.json";
import { TrackModel } from '@core/models/tracks.model';

describe('OrderListPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderListPipe();
    expect(pipe).toBeTruthy();
  });


  it("Probando entrada y salida de valores", () =>{
    //el arranque
    const pipe = new OrderListPipe();
    const {data}: any = (mockRaw as any).default;

    //el accionar
    const result:TrackModel[] = pipe.transform(data)

    //lo que se espera
    expect(result).toEqual(data);
  })

  it("Probando si se ordena de manera correcta",()=>{
    //arranque
    const pipe = new OrderListPipe();
    const {data}: any = (mockRaw as any).default
    const firstvalue = data.find((i:any) =>i._id===7)
    const lastvalue = data.find((i:any) =>i._id===6)

    //accionar

    const result: TrackModel[]=pipe.transform(data,"name", "asc")
    const firstResult = result[0];
    const lastResult = result[result.length -1];

    //lo que esperamos es:

    expect(firstResult).toEqual(firstvalue);
    expect(lastResult).toEqual(lastvalue);


  })
});
