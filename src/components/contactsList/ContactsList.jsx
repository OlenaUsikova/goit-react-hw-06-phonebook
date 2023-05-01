import PropTypes from 'prop-types'
import {Contact} from '../contact/Contact'

export const ContactList = ({contacts}) => {
    return ( <ul>
         {contacts.map((contact) => {
             return ( 
             <li key={contact.id}>
                 <Contact contact={contact}/>
             </li> 
             )
         })}
     </ul>
    )
 };

 ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.object)
    }    