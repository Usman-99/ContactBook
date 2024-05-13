import ContactList from "./ContactList"
export default function ContactCard(props) {
  let onDelete=(id)=>{
    props.removeContact(id)
  }
  return (
    props.contactList.map((contact,i)=>{
        return <ContactList contact={contact} onDelete={onDelete} key={i}/>
    })
  )
}
