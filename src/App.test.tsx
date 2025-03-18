import { render, screen, fireEvent } from "@testing-library/react";
import CopyButton from "./components/Button/CopyQuote"; // Asegúrate de que la ruta sea correcta

beforeAll(() => {
  Object.defineProperty(navigator, "clipboard", {
    value: {
      writeText: jest.fn(),
    },
    writable: true,
  });
});

test("Copia el texto al portapapeles al hacer clic", async () => {
  render(<CopyButton textToCopy="Frase de prueba" />);

  const button = screen.getByRole("button");
  fireEvent.click(button);

  expect(navigator.clipboard.writeText).toHaveBeenCalledWith("Frase de prueba");
});