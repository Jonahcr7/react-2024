const CriptoHistorial = ({historial}) => {
    return (
        <div>
            <h1>HISTORIAL</h1>
            <table>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        historial.map(({date, priceUsd, time}) => (
                            <tr key={time}>
                                <td>{date}</td>
                                <td>{priceUsd}</td>
                            </tr>
                        )
                    )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CriptoHistorial;