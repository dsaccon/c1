import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import ArrowLeft from '@material-ui/icons/ArrowLeft'
import { grey } from '@material-ui/core/colors'
import withStyles from '@material-ui/core/styles/withStyles'
import Dots from 'material-ui-dots'
import classNames from 'classnames'
import Carousel from './SwipableCarouselView'
import { modulo } from './util'
import { IconButton } from "@material-ui/core";

const styles = {
  root: {
    '& > *:focus': {
      outline: 'none'
    }
  },
  arrow: {
    width: 48,
    height: 48,
    position: 'absolute',
    top: 'calc((100% - 96px) / 2 + 24px)'
  },
  arrowLeft: {
    left: -96
  },
  arrowRight: {
    right: -96
  },
  arrowIcon: {
    color: grey[700]
  },
  backButton: {
    position: 'absolute',
    top: '20px',
    zIndex: 1,
    left: '10px',
  },
  carouselWrapper: {
    overflow: 'hidden',
    borderRadius: 0,
    transform: 'scale(1.0)',
    background: 'transparent',
    height: '100%'
  },
  dots: {
    paddingTop: 24,
    margin: '0 auto'
  },
  dotsMobile: {
    paddingTop: 0
  },
  dotsMobileLandscape: {
    paddingTop: 20
  },
  footer: {
    marginTop: -72,
    width: '100%',
    position: 'relative',
    textAlign: 'center'
  },
  footerMobile: {
    marginTop: -92
  },
  footerMobileLandscape: {
    marginTop: -3,
    transform: 'translateY(-50vh)',
    display: 'inline-block',
    width: 'auto'
  },
  slide: {
    width: '100%',
    height: '100%'
  },
  slideMobile: {
    width: '100%',
    height: '100%'
  },
  carousel: {
    height: '100%'
  },
  carouselContainer: {
    height: '100%'
  },
  closed: {}
}

class AutoRotatingCarousel extends Component {
  state = {
    slideIndex: 0
  }

  handleContentClick = (e) => e.stopPropagation() || e.preventDefault()

  handleChange = (slideIndex) => {
    this.setState({
      slideIndex
    }, this.onChange(slideIndex))
  }

  decreaseIndex () {
    const slideIndex = this.state.slideIndex - 1
    this.setState({
      slideIndex
    }, this.onChange(slideIndex))
  }

  increaseIndex () {
    const slideIndex = this.state.slideIndex + 1
    this.setState({
      slideIndex
    }, this.onChange(slideIndex))
  }

  onChange (slideIndex) {
    if (this.props.onChange) {
      this.props.onChange(modulo(slideIndex, this.props.children.length))
    }
  }

  render () {
    const {
      autoplay,
      ButtonProps,
      children,
      classes,
      containerStyle,
      interval,
      label,
      landscape: landscapeProp,
      mobile,
      open,
      onStart,
      backButton
    } = this.props
    const landscape = mobile && landscapeProp
    const hasMultipleChildren = children.length != null

    const carousel = (
      <Carousel
        autoplay={open && autoplay && hasMultipleChildren}
        className={classes.carousel}
        containerStyle={{ height: '100%', ...containerStyle }}
        index={this.state.slideIndex}
        interval={interval}
        onChangeIndex={this.handleChange}
        slideClassName={classes.slide}
      >
        {
          React.Children.map(children, c => React.cloneElement(c, {
            mobile,
            landscape
          }))
        }
      </Carousel>
    )

    return (
          <div
            className={classNames(classes.content, {
              [classes.contentMobile]: mobile
            })}
            onClick={this.handleContentClick}
          >
            <Paper
              elevation={mobile ? 0 : 1}
              className={classes.carouselWrapper}>
              {carousel}
            </Paper>
            <div style={landscape ? { minWidth: 300, maxWidth: 'calc(50% - 48px)', padding: 24, float: 'right' } : null}>
              <div
                className={classNames(classes.footer, {
                  [classes.footerMobile]: mobile,
                  [classes.footerMobileLandscape]: landscape
                })}
              >
                {label && <Button
                  variant='contained'
                  onClick={onStart}
                  {...ButtonProps}
                >
                  {label}
                </Button>}
                {
                  hasMultipleChildren &&
                  <Dots
                    count={children.length}
                    index={modulo(this.state.slideIndex, children.length)}
                    className={classNames(classes.dots, {
                      [classes.dotsMobile]: mobile,
                      [classes.dotsMobileLandscape]: landscape
                    })}
                    onDotClick={this.handleChange}
                  />
                }
              </div>
            </div>
          </div>
    )
  }
}

AutoRotatingCarousel.defaultProps = {
  autoplay: true,
  interval: 3000,
  mobile: false,
  open: false,
  hideArrows: false
}

AutoRotatingCarousel.propTypes = {
  /** If `false`, the auto play behavior is disabled. */
  autoplay: PropTypes.bool,
  /** Properties applied to the [Button](https://material-ui.com/api/button/) element. */
  ButtonProps: PropTypes.object,
  /** Object for customizing the CSS classes. */
  classes: PropTypes.object.isRequired,
  /** Override the inline-styles of the carousel container. */
  containerStyle: PropTypes.object,
  /** Delay between auto play transitions (in ms). */
  interval: PropTypes.number,
  /** Button text. If not supplied, the button will be hidden. */
  label: PropTypes.string,
  /** If `true`, slide will adjust content for wide mobile screens. */
  landscape: PropTypes.bool,
  /** If `true`, the screen width and height is filled. */
  mobile: PropTypes.bool,
  /** Properties applied to the [Modal](https://material-ui.com/api/modal/) element. */
  ModalProps: PropTypes.object,
  /** Fired when the index changed. Returns current index. */
  onChange: PropTypes.func,
  /** Fired when the gray background of the popup is pressed when it is open. */
  onClose: PropTypes.func,
  /** Fired when the user clicks the getting started button. */
  onStart: PropTypes.func,
  /** Controls whether the AutoRotatingCarousel is opened or not. */
  open: PropTypes.bool,
  /** If `true`, the left and right arrows are hidden in the desktop version. */
  hideArrows: PropTypes.bool,
  /** Back button to transition to previous slide **/
  backButton: PropTypes.bool
}

export default withStyles(styles)(AutoRotatingCarousel)
