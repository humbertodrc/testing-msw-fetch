import { renderHook, waitFor, } from "@testing-library/react";
import { data } from "../../mock/characters";
import {useApiCharacter} from "../../src/hooks/useApiCharacter";


describe("Pruebas en useApiCharacter.ts", () => {
	;

  const url = `https://rickandmortyapi.com/api/character`;

  test("Debe retornar la información deseada", async () => {

    // El useApiCharacter es un custom hook, debe ser renderizado con renderHook
    const { result  } = renderHook(() => useApiCharacter(url));
     
    // Esperamos a que el estado isLoading cambie a false
    await waitFor(() => expect(result.current.isLoading).toBe(false));

    // Esperamos a que el estado error cambie a false
    await waitFor(() => expect(result.current.error).toBe(false));

    // Esperamos a que el estado character tenga la información deseada
    await waitFor(() => expect(result.current.character).toEqual(data));

  
	});
});
