import React, {useEffect, useState} from 'react';
import Sound from 'react-sound';
import useSound from 'use-sound';
import data from './data';
import PlayButton from "react-play-button";
import ig1 from './Ru/JAVA/AccessModifiersRu.mp3';
import ig2 from './Eng/JAVA/AccessModifiersEn.mp3';
import AudioPlayer from 'react-audio-element';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import {fade, makeStyles} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/AccessibleForwardRounded';
import SearchIcon from '@material-ui/icons/Search';
import Beenhere from '@material-ui/icons/Beenhere';
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHtml5} from '@fortawesome/free-brands-svg-icons'
import {faCss3} from '@fortawesome/free-brands-svg-icons'
import {faJava} from '@fortawesome/free-brands-svg-icons'
import {faJs} from '@fortawesome/free-brands-svg-icons'
import {faNodeJs} from '@fortawesome/free-brands-svg-icons'
import {faDatabase} from '@fortawesome/free-solid-svg-icons'
import {faTable} from '@fortawesome/free-solid-svg-icons'
import {faChartBar} from '@fortawesome/free-solid-svg-icons'
import {faLaptopCode} from '@fortawesome/free-solid-svg-icons'
import {faSwatchbook} from '@fortawesome/free-solid-svg-icons'
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import {
    IconFlagUK,
    IconFlagRU
} from 'material-ui-flags';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        right: '10px',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
    flexContainer: {
        display: 'grid',
        gridTemplateRows: '1fr',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
        padding: 0,
        ['@media (max-width:680px)']: {
            gridTemplateRows: '1fr 1fr',
            gridTemplateColumns: '1fr 1fr 1fr',
        },
        ['@media (max-width:400px)']: {
            gridTemplateRows: '1fr 1fr 1fr',
            gridTemplateColumns: '1fr 1fr',
        },
    },
    listItemFilter: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // borderBottom: '1px solid black'
        boxShadow: '0px 1px 3px 0px rgba(38,45,188,0.75)'
    },
    navIcon: {
        position: 'relative',
        right: '10px'
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    answerCaption: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}));

/*
*
*  html, css, js, typescript, graphQL, networking, java, sql, mongodb, oop
* */

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {
    const classes = useStyles();
    const [language, setLanguage] = useState(false);
    const [filterType, setFilterType] = useState(null);
    const [category, setCategory] = useState(null);

    useEffect(() => {
        console.log(ig1)
        console.log(ig2)
    }, []);


    const changeLanguageHandler = () => {
        setLanguage(!language);
    };

    const changeCategoryHandler = (value) => {
        setCategory(value);
        console.log(category)
    };

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Answer Quick
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{'aria-label': 'search'}}

                        />
                    </div>
                    <Button variant="contained" color="secondary">
                        Reset
                    </Button>
                    <div>
                        <IconButton onClick={changeLanguageHandler}>{!language ? <IconFlagUK /> : <IconFlagRU />}</IconButton>
                    </div>
                </Toolbar>
            </AppBar>

            <List className={classes.flexContainer}>
                <ListItem className={classes.listItemFilter} onClick={changeCategoryHandler.bind(this, "WebStack")} button={true}><FontAwesomeIcon className={classes.navIcon}
                                                                                            icon={faLaptopCode}/>WebStack</ListItem>
                <ListItem className={classes.listItemFilter} onClick={changeCategoryHandler.bind(this, "GraphQL")} button={true}><FontAwesomeIcon className={classes.navIcon}
                                                                                            icon={faChartBar}/>GraphQL</ListItem>
                <ListItem className={classes.listItemFilter} onClick={changeCategoryHandler.bind(this, "MongoDB")} button={true}><FontAwesomeIcon className={classes.navIcon}
                                                                                            icon={faDatabase}/>MongoDB</ListItem>
                <ListItem className={classes.listItemFilter} onClick={changeCategoryHandler.bind(this, "SQL")} button={true}><FontAwesomeIcon className={classes.navIcon}
                                                                                            icon={faTable}/>SQL</ListItem>
                <ListItem className={classes.listItemFilter} onClick={changeCategoryHandler.bind(this, "JAVA")} button={true}><FontAwesomeIcon className={classes.navIcon}
                                                                                            icon={faJava}/>JAVA</ListItem>
                <ListItem className={classes.listItemFilter} onClick={changeCategoryHandler.bind(this, "OOP")} button={true}><FontAwesomeIcon className={classes.navIcon}
                                                                                            icon={faSwatchbook}/>OOP</ListItem>
            </List>


            <main>
                <Container className={classes.cardGrid} maxWidth="xl">
                    <Grid container spacing={4}>
                        {data.map((card, i) => (
                            (category === card.section || category === null)  ? <AnswerCard

                                key={i}

                                question={language ? card.questionInRus : card.questionInEng}
                                answer={language ? card.answerInRus : card.answerInEng}
                                text={language ? card.textInRus : card.textInEng}

                                img={card.img}
                            /> : ""
                        ))}
                    </Grid>
                </Container>
            </main>

        </div>
    );
};

export default App;

const AnswerCard = ({question, text, img, answer}) => {
    const classes = useStyles();
    const [play, {stop, isPlaying}] = useSound(answer);

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image={img}
                    title="Image title"
                />
                <CardContent className={classes.cardContent}>
                    <Grid container
                          justify="space-between"
                          alignItems="center">
                        <Typography className={classes.answerCaption} variant="h5" component="h2">
                            {question}&nbsp;<Beenhere style={{color: 'green'}}/>
                        </Typography>

                        <PlayButton
                            active={isPlaying}
                            size={60}
                            iconColor="var(--color-background)"
                            idleBackgroundColor="blue"
                            activeBackgroundColor="blue"
                            play={play}
                            stop={stop}

                        />

                    </Grid>
                    <Typography align="justify" style={{marginTop: '10px'}}>
                        {text}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        View
                    </Button>
                    <Button size="small" color="primary">
                        Edit
                    </Button>

                </CardActions>
            </Card>
        </Grid>
    );
};