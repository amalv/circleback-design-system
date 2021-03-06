import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { StylesProvider, useTheme } from "@material-ui/core/styles";
import {
  FiltersWrapper,
  FiltersLabel,
  FormControlStyled,
  InputBaseStyled,
} from "./Filters.styles";

export const Filters: React.FC = () => {
  const [category, setCategory] = React.useState("");
  const [user, setUser] = React.useState("");
  const theme = useTheme();
  const handleChangeCategory = (
    event: React.ChangeEvent<{ value: unknown }>,
  ): void => {
    setCategory(event.target.value as string);
  };

  const handleChangeUser = (
    event: React.ChangeEvent<{ value: unknown }>,
  ): void => {
    setUser(event.target.value as string);
  };
  const FiltersLabelContrastText = theme.palette.getContrastText(
    theme.palette.primary.main,
  );
  return (
    <StylesProvider injectFirst>
      <FiltersWrapper color={theme.palette.primary.main}>
        <Grid item xs container direction="column">
          <Grid item>
            <FiltersLabel textcolor={FiltersLabelContrastText}>
              Filter by
            </FiltersLabel>
          </Grid>
          <Grid item>
            <FormControlStyled>
              <Select
                displayEmpty
                id="select-category"
                value={category}
                onChange={handleChangeCategory}
                input={
                  <InputBaseStyled textcolor={theme.palette.text.secondary} />
                }
              >
                <MenuItem value="" disabled>
                  Category
                </MenuItem>
                <MenuItem value={10}>Category 1</MenuItem>
                <MenuItem value={20}>Category 2</MenuItem>
                <MenuItem value={30}>Category 3</MenuItem>
              </Select>
            </FormControlStyled>
            <FormControlStyled>
              <Select
                displayEmpty
                id="select-user"
                value={user}
                onChange={handleChangeUser}
                input={
                  <InputBaseStyled textcolor={theme.palette.text.secondary} />
                }
              >
                <MenuItem value="" disabled>
                  User
                </MenuItem>
                <MenuItem value={10}>User 1</MenuItem>
                <MenuItem value={20}>User 2</MenuItem>
                <MenuItem value={30}>User 3</MenuItem>
              </Select>
            </FormControlStyled>
          </Grid>
        </Grid>
      </FiltersWrapper>
    </StylesProvider>
  );
};
