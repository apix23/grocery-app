import { Box, Checkbox, styled } from '@mui/material';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import React from 'react';

interface PropsItem {
  itemName: string;
  itemQuantity: number;
  isChecked: boolean;
}

export const Item: React.FC<PropsItem> = ({
  itemName,
  itemQuantity,
  isChecked,
}) => {
  return (
    <ItemStyled>
      <Checkbox
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<DoneOutlineIcon />}
      />

      <ItemNameStyled>{itemName}</ItemNameStyled>
      {itemQuantity && (
        <QuantityContainer>{itemQuantity} pcs</QuantityContainer>
      )}
    </ItemStyled>
  );
};

const ItemStyled = styled(Box)`
  height: 40px;
  width: 100%;
  border-bottom: 2px dashed grey;
  display: flex;
  align-items: center;
`;

const QuantityContainer = styled(Box)({
  backgroundColor: 'lightgrey',
  fontWeight: 600,
  borderRadius: '4px',
});

const ItemNameStyled = styled(Box)`
  margin: 0 5px;
`;
