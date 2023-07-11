import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>11/07/2023</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw"> - R$ 1.000</td>
            <td>Casa</td>
            <td>05/07/2023</td>
          </tr>

          <tr>
            <td>Desenvolvimento de website</td>
            <td>R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>11/07/2023</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
