import styled from 'styled-components'

export const ListaVagasEstilo = styled.div`
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 16px;
    row-gap: 16px;
    margin-top: 32px;

    @media (max-width: 1024px) {
      display: block;

      li {
        margin-bottom: 16px;
      }

      li li {
        margin-bottom: 0;
      }
      }
  }

  ul ul {
    display: block;
  }
  }
`
