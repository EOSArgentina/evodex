import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  selectContent: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: 56,
    lineHeight: 3,
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 0, 0, 0.09)',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottom: '2px solid rgba(0, 0, 0, 0.38)',
    padding: '5px 14px 0 14px',
    '& select': {
      appearance: 'none',
      outline: 0,
      boxShadow: 'none',
      border: '0 !important',
      background: 'none',
      backgroundImage: 'none',
      padding: '0 20px 0 0',
      cursor: 'pointer',
      width: '50%',
      fontSize: 20.2,
      fontWeight: 600,
      letterSpacing: '0.25px',
      textAlign: 'center',
      color: '#ffffff',
      '& active': {
        backgroundColor: 'red'
      }
    },
    '& input': {
      appearance: 'none',
      outline: 0,
      border: '0 !important',
      background: 'none',
      padding: '0 20px 0 0',
      cursor: 'auto',
      width: '100%',
      fontSize: 16.2,
      lineHeight: 1.48,
      letterSpacing: '0.15px',
      color: '#ffffff'
    }
  },
  arrowDown: {
    border: 'none',
    borderTop: '5px solid #ffffff',
    borderLeft: '5px solid rgba(0,0,0,0)',
    borderRight: '5px solid rgba(0,0,0,0)',
    zIndex: 2,
    position: 'absolute',
    float: 'right',
    right: 15,
    marginTop: 22
  },
  inputWrapper: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    '& p': {
      fontSize: 12.1,
      fontWeight: 600,
      lineHeight: 1.32,
      letterSpacing: '0.4px',
      color: '#ffffff'
    }
  },
  helperText: {
    fontSize: '12.1px !important',
    lineHeight: '1.32 !important',
    letterSpacing: '0.4px !important',
    color: '#ffffff',
    marginLeft: `${theme.spacing(1)}px !important`,
    marginTop: `${theme.spacing(0.5)}px !important`
  }
}))

const InputTextAndSelect = ({ label, helperText, onChange, options }) => {
  const classes = useStyles()
  const [inputData, setInputData] = useState({
    inputValue: '',
    selectValue: 0
  })

  const handleOnChange = (value, type) => {
    setInputData({ ...inputData, [type]: value })
    onChange({ ...inputData, [type]: value })
  }

  return (
    <Box width="100%">
      <Box className={classes.selectContent}>
        <Box className={classes.inputWrapper}>
          <Typography variant="body1">{label}</Typography>
          <input
            type="text"
            onChange={(e) => handleOnChange(e.target.value, 'inputValue')}
            value={inputData.inputValue}
          />
        </Box>
        <select
          name="slct"
          dir="rtl"
          onChange={(e) => handleOnChange(e.target.value, 'selectValue')}
          value={inputData.selectValue}
        >
          <option value="0" disabled />
          {options.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <Box className={classes.arrowDown} />
      </Box>
      <Typography className={classes.helperText}>{helperText}</Typography>
    </Box>
  )
}

InputTextAndSelect.propTypes = {
  label: PropTypes.string,
  helperText: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array
}

InputTextAndSelect.defaultProps = {
  label: '',
  helperText: '',
  onChange: () => {},
  options: [
    { value: 'EOS', label: 'EOS' },
    { value: 'EVO', label: 'EVO' },
    { value: 'EOSEVO', label: 'EOSEVO' },
    { value: 'USDT', label: 'USDT' },
    { value: 'EVOWAX', label: 'EVOWAX' }
  ]
}

export default InputTextAndSelect