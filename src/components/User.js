import { Component } from 'react';
import PropTypes from 'prop-types';

class User extends Component {

    state = {
        isVisible: false
    }

    static defaultProps = {
        name: "Ad Bilgisi Yok",
        salary: "Maaş Bilgisi Yok",
        department: "Departman Bilgisi Yok"
    }
    // 2.Bind Etme Yöntemi
    // constructor(props){
    //     super(props)
    //     this.onClickEvent = this.onClickEvent.bind(this)
    // }

    // 3.Bind Etme Yöntemi (arrow function)
    onClickEvent = (e) => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }

    render() {

        // Destructing
        const { name, department, salary } = this.props;
        const { isVisible } = this.state;


        return (
            <div className='col-md-8 mb-4'>
                <div className='card'>
                    <div className='card-header d-flex justify-content-between'>
                        <h4 className='d-inline' style={{ cursor: "pointer" }} onClick={this.onClickEvent}>{name}</h4>
                        <i className="fa-regular fa-trash-can" style={{ cursor: "pointer" }}></i>
                    </div>
                    {
                        isVisible ? <div className='card-body'>
                            <p className='card-text'>Maaş : {salary}</p>
                            <p className='card-text'>Departman : {department}</p>
                        </div> : null
                    }
                </div>
            </div>
        );
    }
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired
}

export default User;