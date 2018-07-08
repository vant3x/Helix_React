import React, { PureComponent } from 'react';
import './media.css';
import PropTypes from 'prop-types';
class Media extends PureComponent {
 // es7
  state = {
    author: 'Alejandro Velásquez'
  }
    render() {
      const styles = {
        container: {
          fontSize: 16,
          color: '#44546b',
          cursor: 'pointer',
          fontFamily: 'Arial',
          width: 260,
          border: '1px solid black'
        }
      }
      return (
        <div className="Media" onClick={this.props.handleClick}>
          <div className="Media-cover">
            <img  className="Media-image" src={this.props.cover} alt="" width={260} height={160} />
            <h3 className="Media-title">{this.props.title}</h3>
            <p className="Media-author">{this.props.author}</p>
          </div>
        </div>
      )
    }
 }
Media.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  type: PropTypes.oneOf(['video','audio'])
}

export default Media;