import React, { useState, FormEvent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, TextField, Paper, List, ListItem, ListItemText, Divider, Container, Grid } from '@material-ui/core';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { BackgroundGradient } from "./components/ui/background-gradient";
import { Meteors } from "./components/ui/meteors";
import { animated, useSpring } from 'react-spring';

const useStyles = makeStyles((theme) => ({
  appBar: {
    marginBottom: theme.spacing(4),
    background: 'linear-gradient(45deg, #0A2463  30%, #D9D9D9 90%)',
    justifyContent: 'center',
  },
  pausedText: {
    backgroundImage: 'linear-gradient(45deg, #0A2463  100%, #D9D9D9 70%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    animation: '$animateGradient 1s ease infinite',
  },
  '@keyframes animateGradient': {
    '0%': {
      backgroundPosition: '0% 50%',
    },
    '50%': {
      backgroundPosition: '100% 50%',
    },
    '100%': {
      backgroundPosition: '0% 50%',
    },
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    color: '#F3D99E',
    fontSize: '1.8rem',
  },
  videoFeed: {
    width: '100%',
    backgroundColor: '#ddd',
    marginBottom: theme.spacing(0),
    padding: theme.spacing(0),
    textAlign: 'center',
    height: '400px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: '22px',
  },
  videoFeedContainer: {
    borderRadius: theme.shape.borderRadius,
    overflow: 'hidden',
    position: 'relative',
    marginBottom: theme.spacing(0.0001),
  },
  transcriptionBox: {
    width: '100%',
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(2),
  },
  commentSection: {
    width: '100%',
    maxHeight: '300px',
    overflow: 'auto',
  },
  commentInput: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  pauseButton: {
    marginTop: theme.spacing(1),
  },
}));

const VirtualPalette = () => {
  const classes = useStyles();
  const [comments, setComments] = useState<string[]>([]);
  const [isStreaming, setIsStreaming] = useState(true);
  const [isRecording, setIsRecording] = useState(false);
  const { transcript, resetTranscript } = useSpeechRecognition();
  const streamSrc = isStreaming ? 'http://127.0.0.1:5000/video_feed' : '';
  const [generatedTranscript, setGeneratedTranscript] = useState('');
  const [isPaused, setIsPaused] = useState(true);

  const titleProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,
    config: { duration: 1000 }
  });

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const handleCommentSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const comment = event.currentTarget.comment.value.trim();

    if (comment !== '') {
      setComments([...comments, comment]);
      event.currentTarget.comment.value = '';
    }
  };

  const handleToggleStreaming = () => {
    const newIsPaused = !isPaused;
    setIsPaused(newIsPaused);
    setIsStreaming(!newIsPaused);

    // fetch(/pause_stream?paused=${!isPaused})
    //   .catch(error => console.error('Error:', error));
  };

  const startListening = () => {
    setIsRecording(true);
    SpeechRecognition.startListening({ continuous: true });
  };

  const stopListening = () => {
    setIsRecording(false);
    SpeechRecognition.stopListening();
  };

  const generateTranscript = () => {
    fetch('transcript.txt')
      .then(response => response.text())
      .then(text => setGeneratedTranscript(text))
      .catch(error => console.error('Error loading transcript:', error));
  };
  const submitTranscript = () => {
    fetch('/submit_transcript', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ transcript: generatedTranscript }),
    })
      .then(response => {
        if (response.ok) {
          // Redirect to doubtsection page after successful submit
          window.location.href = '/doubtsection';
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  return (
    <Container>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <animated.div style={titleProps}>
            <Typography variant="h6" className={classes.title}>
              Virtual Palette
            </Typography>
          </animated.div>
        </Toolbar>
      </AppBar>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <BackgroundGradient className={classes.videoFeedContainer}>
            <Paper className={classes.videoFeed}>
              {isStreaming ? (
                <img src={streamSrc} alt="Video Feed" style={{ width: '100%', height: 'auto' }} />
              ) : (
                <Typography variant="h6" className={classes.pausedText}>Stream Paused</Typography>
              )}
            </Paper>
          </BackgroundGradient>
          <Button variant="contained" color="primary" onClick={handleToggleStreaming} className={classes.pauseButton}>
            {isPaused ? 'Resume Stream' : 'Pause Stream'}
          </Button>
          <TextField
            label="Live Transcription"
            variant="outlined"
            className={classes.transcriptionBox}
            multiline
            rows={4}
            value={generatedTranscript || transcript}
            placeholder="Transcription will appear here..."
            InputProps={{
              readOnly: true,
            }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={isRecording ? stopListening : startListening}
          >
            {isRecording ? 'Stop Speech-to-Text' : 'Enable Speech-to-Text'}
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={generateTranscript}
            style={{ marginLeft: '8px' }}
          >
            Generate Transcript
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={submitTranscript}
            style={{ marginLeft: '8px' }}
          >
            Submit Transcript
          </Button>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Comments
          </Typography>
          <Paper className={classes.commentSection}>
            <List>
              {comments.map((comment, index) => (
                <React.Fragment key={index}>
                  <ListItem>
                    <ListItemText primary={comment} />
                  </ListItem>
                  {index < comments.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </Paper>
          <form onSubmit={handleCommentSubmit}>
            <TextField
              label="Add a comment"
              variant="outlined"
              className={classes.commentInput}
              name="comment"
            />
            <Button type="submit" variant="contained" color="primary" style={{ marginTop: '8px' }}>
              Post Comment
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default VirtualPalette;