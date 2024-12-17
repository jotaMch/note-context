import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

describe("Button Component", () => {
  it("renderiza corretamente com o texto fornecido", () => {
    render(<Button name="Clique aqui" />);
    const buttonElement = screen.getByRole("button", { name: "Clique aqui" });
    expect(buttonElement).toBeInTheDocument();
  });

  it("renderiza corretamente com o texto padrão se o nome não for fornecido", () => {
    render(<Button />);
    const buttonElement = screen.getByRole("button", { name: "Button" });
    expect(buttonElement).toBeInTheDocument();
  });

  it("aplica o estilo inline corretamente", () => {
    const buttonStyle = {
      width: "200px",
      height: "50px",
      border: "1px solid #000",
      backgroundColor: "#f00",
      color: "#fff",
      fontSize: "16px",
    };

    render(
      <Button
        w={buttonStyle.width}
        h={buttonStyle.height}
        b={buttonStyle.border}
        bg={buttonStyle.backgroundColor}
        color={buttonStyle.color}
        fz={buttonStyle.fontSize}
      />
    );

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveStyle(`width: ${buttonStyle.width}`);
    expect(buttonElement).toHaveStyle(`height: ${buttonStyle.height}`);
    expect(buttonElement).toHaveStyle(`border: ${buttonStyle.border}`);
    expect(buttonElement).toHaveStyle(`background-color: ${buttonStyle.backgroundColor}`);
    expect(buttonElement).toHaveStyle(`color: ${buttonStyle.color}`);
    expect(buttonElement).toHaveStyle(`font-size: ${buttonStyle.fontSize}`);
  });

  it("aplica o tipo de botão 'submit' corretamente", () => {
    render(<Button name="Enviar" type="submit" />);
    const buttonElement = screen.getByRole("button", { name: "Enviar" });
    expect(buttonElement).toHaveAttribute("type", "submit");
  });

  it("aplica o tipo de botão 'reset' corretamente", () => {
    render(<Button name="Resetar" type="reset" />);
    const buttonElement = screen.getByRole("button", { name: "Resetar" });
    expect(buttonElement).toHaveAttribute("type", "reset");
  });

  it("aplica o tipo de botão 'button' por padrão", () => {
    render(<Button name="Clique aqui" />);
    const buttonElement = screen.getByRole("button", { name: "Clique aqui" });
    expect(buttonElement).toHaveAttribute("type", "button");
  });
});
