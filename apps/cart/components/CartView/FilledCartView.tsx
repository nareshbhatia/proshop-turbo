import * as React from 'react';
import { styled } from '@mui/system';
import { Cart } from 'proshop-models';
import { PlaceOrderPanel } from './PlaceOrderPanel';
import { OrderItemView } from './OrderItemView';

const List = styled('ul')({
  listStyle: 'none',
  paddingLeft: 0,
});

const ListItem = styled('li')(({ theme }) => ({
  paddingTop: theme.spacing(6),
  '&:first-of-type': {
    paddingTop: theme.spacing(2),
  },
}));

export interface FilledCartViewProps {
  cart: Cart;
}

export function FilledCartView({ cart }: FilledCartViewProps) {
  return (
    <React.Fragment>
      <PlaceOrderPanel cart={cart} />
      <List>
        {cart.items.map((item) => {
          return (
            <ListItem key={item.id}>
              <OrderItemView item={item} />
            </ListItem>
          );
        })}
      </List>
    </React.Fragment>
  );
}
