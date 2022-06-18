# Redux Ifood Counter
This is a Redux and React project that attempt to create a counter similar to ifood's one.

## Resources
 - **Counter**: This counter was created using a *Class Component*. The count, the price and the minus button style are treated as a *state* and its value is set using the reducers *add()* and *sub()*, with the actions *ADD* and *SUBTRACT* given by the corresponding buttons.
 - ***add()***: Adds 1 to the counter number and, if the number is 0, active the minus button.
 - ***sub()***: Subtracts 1 to the counter number if the number isn't 0 and, if the number is 1, disable the minus button.
 - **Price**: This is a button to add the products to the cart and its value is set using the *price* prop.

### Credits
This app was made by Carlos Daniel Penaforte de Souza.