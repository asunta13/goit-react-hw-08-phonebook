import { Button } from '../../shared/utils/Button/Button';
import { ListItem } from './ContactList.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/contactsSelectors';
import {
  fetchAllContacts,
  fetchDeleteContact,
} from 'redux/contacts/contactsOperations';

export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const list = useSelector(selectFilteredContacts);
  const isContacts = Boolean(list.length);

  const onContactDelete = id => {
    dispatch(fetchDeleteContact(id));
  };
  return (
    <div>
      {isContacts && (
        <ul>
          {list.map(({ id, name, number }) => (
            <ListItem key={id}>
              {name}: {number}
              <Button onClick={() => onContactDelete(id)}>Delete</Button>
            </ListItem>
          ))}
        </ul>
      )}
      {!isContacts && <p>There are no contacts</p>}
    </div>
  );
};
