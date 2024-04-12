import styled from 'styled-components'

export const FormVagasEstilo = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;

  @media (max-width: 768px) {
    display: block;
    text-align: center;

    input {
      width: 100%;
      font-size: 18px;
      border-radius: 8px;
    }

    button {
      width: 100%;
      margin-left: 0px;
    }
  }

  button {
    background-color: var(--cor-principal);
    border: 1px solid var(--cor-principal);
    height: 40px;
    padding: 0 16px;
    font-size: 18px;
    color: var(--cor-secundaria);
    margin-left: 8px;
    cursor: pointer;
    border-radius: 8px;

    @media (max-width: 768px) {
      margin: 0px;
      margin-top: 8px;
    }
  }

  input {
    padding: 0 16px;
    outline-color: var(--cor-principal);
  }
`
