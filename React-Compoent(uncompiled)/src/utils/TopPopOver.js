import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';

const styles = theme => ({
  typography: {
    margin: theme.spacing.unit * 2,
  },
});

class TopPopOver extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClose = () => {
    this.setState({
      anchorEl: null,
    });
  };


  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;

    return (
      <div>
        <Popover
          id={this.props.id}
          open={this.props.open}
          anchorEl={anchorEl}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
        >
          <Typography className={classes.typography}>{this.props.content}</Typography>
        </Popover>
      </div>
    );
  }
}

TopPopOver.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopPopOver);