import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

export default function AlertDialog ({ alert, handleAlert, handleDeleteStudent }) {
  return (
    <div>
      <Dialog
        open={alert}
        onClose={handleAlert}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>Do you want to delete this student?</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            By clicking on yes, student will be permanently deleted.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAlert} color='primary'>
            No
          </Button>
          <Button onClick={handleDeleteStudent} color='primary' autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
