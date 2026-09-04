export const ContactsList = ({ data, onDelete }) => {
    return <ul>
        {data.map(contact => <li key={contact.id}>
            <p>name: {contact.name}: {contact.number}</p>
            <button onClick={() => onDelete(contact.id)} type="button">delete</button>
        </li>)}
    </ul>
}