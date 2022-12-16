import { getGifs } from "../../helpers/getGifs";

describe("Pruebas en la funcion getGifs", () => {
  test("Debe retornar un arreglo de imagenes", async () => {
    const gifs = await getGifs("one-punch");
    expect(gifs.lenght).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
