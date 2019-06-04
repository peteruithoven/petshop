import { styled } from '@material-ui/styles';
import { style, compose } from '@material-ui/system';

export default styled('div')(
  compose(
    style({ prop: 'gridTemplateColumns' }),
    style({ prop: 'gridGap', themeKey: 'spacing' }),
    () => ({
      display: 'grid',
    })
  )
);
