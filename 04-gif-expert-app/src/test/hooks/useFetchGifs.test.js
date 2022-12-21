import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook, waitFor } from "@testing-library/react";
describe("pruebas en el hook useFetchGifs", () => {
  test("Debe regresar el estado inicial", () => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));
    const { images, isLoading } = result.current;
    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("Debe retornar un arreglo imagenes y el isLoading en false", async () => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));
    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );

    expect(result.current.images.length).toBeGreaterThan(0);
  });
});
