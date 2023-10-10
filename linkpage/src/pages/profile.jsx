import readyToUse from '../icons/ready-to-use.png'
import { Fragment, useState, useRef, useEffect } from 'react'
import { Dialog, Transition, RadioGroup } from '@headlessui/react'
import { Share06, Edit05, Image01, FaceSmile, Menu02, Edit01, ChevronLeft, ChevronDown, Link01, Grid01, Trash01, CheckCircle, MagicWand01, Globe02, MusicNotePlus, ChevronRight, TypeSquare, Copy06, Download01, User01, HomeSmile, LogOut01, Data, MessageSmileCircle,XClose} from "@untitled-ui/icons-react";
import EmojiPicker, { Emoji } from "emoji-picker-react";
import zaviago from '../icons/zaviago-com.svg'
import bioIcon from '../icons/icon.svg'
import DotsVertical from "../icons/dotsVertical";
import UpperLink from "../icons/upperLink";
import LowerLink from "../icons/lowerLink";
import templateOne from '../templates/template-one.png'
import templateTwo from '../templates/template-two.png'
import templateThree from '../templates/template-three.png'
import templateFour from '../templates/template-four.png'
import templateFive from '../templates/template-five.png'
import templateSix from '../templates/template-six.png'
import templateSeven from '../templates/template-seven.png'
import templateEight from '../templates/template-eight.png'
import templateNine from '../templates/template-nine.png'
import templateTen from '../templates/template-ten.png'
import QRCode from 'react-qr-code';
import { Facebook, Instagram, XTwitter, Tiktok, GoogleHangouts, Messenger, WhatsApp, Youtube, Gmail, LinkedIn, Kakaotalk, Line, WeChat, Tinder, Reddit, Clubhouse, Discord, Snapchat, Threads, Twitch, OnlyFans } from '../icons/social-media'
import { Spotify, YoutubeMusic, Signal, Soundcloud, AppleMusic, Telegram, AppleFacetime, GoogleMaps, Pinterest, Giphy, Dropbox, Onedrive, WeTransfer, Patreon, Blogger, Deviantart, Invision, Behance, Dribbble, GoogleDrive } from '../icons/other-icons'
import { Amazon, Lazada, Shopee, TiktokShop, Linemyshop, Ebay, Shopify } from '../icons/shopping-icons';
import LoadingSave from '../components/loadingSave';
import { useFrappeGetDoc, useFrappeDeleteDoc, useFrappeFileUpload, useFrappeUpdateDoc, useFrappeGetDocList } from 'frappe-react-sdk';
import { useToast, Switch} from '@chakra-ui/react';



const shortcutDisplay = [
  { id: 1, title: 'ด้านบนของลิงก์', img: UpperLink},
  { id: 2, title: 'ด้านล่างของลิงก์', img: LowerLink},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const fileArgs = {
  /** If the file access is private then set to TRUE (optional) */
  "isPrivate": false,
  /** Doctype associated with the file (optional) */
  "doctype": "Linkpage",
  /** Docname associated with the file (mandatory if doctype is present) */
  "docname": "Suttirak Chan",
  /** Field in the document **/
  "fieldname": "user_image"
}

var dataUpdateUser =
{
  'birthday_profile' : null,
  'email_profile' :  null,
  'name_profile' : null,
  'surname_profile' : null,
  'user_image' : null,
  "description": null,
  "button": null,
  "emoji": null,
  "template": null,
  "link_color" : null,
  'zaviago_color' : null
}


const Profile = () => {
  const toast = useToast();

  const [image, setImage] = useState(null);
  const [tempImage, setTempImage] = useState(null)
  const [iKnowEdit, setIKnowEdit] = useState(false);

  const [nameProfile, setNameProfile] = useState('')
  const [nameTempProfile, setTempNameProfile] = useState('')

  const [surnameProfile, setSurnameProfile] = useState('')
  const [surnameTempProfile, setSurnameTempProfile] = useState('')

  const [birthdateProfile, setBirthdateProfile] = useState('')
  const [birthdateTempProfile, setBirthdateTempProfile] = useState('')

  const [emailProfile, setEmailProfile] = useState('')
  const [emailTempProfile, setEmailTempProfile] = useState('')

  const [name, setName] = useState('');
  const [nameTemp, setTempName] = useState('');

  const [description, setDescription] = useState('');
  const [descriptionTemp, setTempDescription] = useState('');

  const [button, setButton] = useState(null);
  const [buttonTemp, setTempButton] = useState(null);

  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [selectedTempEmoji, setSelectedTempEmoji] = useState("");

  const [template, setTemplate] = useState('');
  const [templateTemp, setTempTemplate] = useState('');

  const [linkColor, setLinkColor] = useState('');
  const [linkColorTemp, setTempLinkColor] = useState('');

  const [zaviagoColor, setZaviagoColor] = useState('');
  const [zaviagoTempColor, setZaviagoTempColor] = useState('');

  //-----------frappe connection----------//

  const { data:dataUser, error : errorDataUser, mutate : mutateDataUser } = useFrappeGetDoc('Linkpage','Suttirak Chan')
  const { data:User, error : errorUser } = useFrappeGetDoc('User','suttirak.ch@zaviago.com')
  const { upload :uploadImage, error:errorUploadImage } = useFrappeFileUpload();
  const { updateDoc, error : updateError, reset} = useFrappeUpdateDoc()

  const Update = () => {
    updateDoc('Linkpage', 'Suttirak Chan', dataUpdateUser ).then((response2) =>{
      })
      .catch((error) =>{
      })
  }

  const handleUploadImage =(e) =>
  {
    console.log(here)
    if(e.target.files[0])
    {
      uploadImage(e.target.files[0], fileArgs) .then((response) => {
        toast({
          title: 'File updated succesfully',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        setTempImage(response.file_url)
      })
      .catch(() => {
        toast({
          title: 'Error while UploadingFile',
          description : errorUploadImage,
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      });
    }

  }
  //-----------end here------------------//

  const [copyIcon, setCopyIcon] = useState(<Copy06 color='#FF4A00' viewBox='0 0 24 24' width='20' height='20'/>)
  const [copyText, setCopyText] = useState('คัดลอก')
  const [mylink, setMylink] = useState('hitlink.mylinkname');

  const [bio, setBio] = useState('')
  const [openReady, setOpenReady] = useState(false)
  const [openAccountMenu, setOpenAccountMenu] = useState(false);
  const [openEdit, setOpenEdit] = useState(false)

  const [updateName, setUpdateName] = useState(name);
  const [btnTitle, setBtnTitle] = useState('');
  const [updateBtnTitle, setUpdateBtnTitle] = useState(btnTitle);
  const [btnTitleWhenSaved, setBtnTitleWhenSaved] = useState('');

  const [emoji, setEmoji] = useState(false)
  const [focus, setFocus] = useState(0);

  const [savedNoti, setSavedNoti] = useState(false);
  const [savedNotiAnim, setSavedNotiAnim] = useState('saved-noti-fade-in');
  const [savedNotiText, setSavedNotiText] = useState('');

  const showSavedNoti = (text) => {
    setSavedNoti(true);
    setSavedNotiAnim('saved-noti-fade-in');
    setSavedNotiText(text);
    setTimeout(() => {
      setSavedNotiAnim('saved-noti-fade-out')
    }, 5000)
    setTimeout(() => {
      setSavedNoti(false)
    }, 6000)
  }

  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [openAddButtonModal, setOpenAddButtonModal] = useState(false)
  const [openChangeTitle, setOpenChangeTitle] = useState(false)
  const [openEditProfile, setOpenEditProfile] = useState(false)
  const [openShare, setOpenShare] = useState(false)
  const [selectCustomise, setSelectCustomise] = useState(false);

  const [addBtnMenuActive, setAddBtnMenuActive] = useState(0)
  const [shortcutMenuActive, setShortcutMenuActive] = useState(0)
  const [addShortcut, setAddShortcut] = useState(false) // false
  const [modifiedSVG, setModifiedSVG] = useState(null);

  const templates = [templateOne, templateTwo, templateThree, templateFour, templateFive, templateSix, templateSeven, templateEight, templateNine, templateTen];
  const [numTemplates, setNumTemplates] = useState(1);
  const [numSubTemplates, setSubNumTemplates] = useState(1);
  const [imgPath, setImagepath] = useState([]);

  const [selectedShortcutDisplay, setSelectedShortcutDisplay] = useState(shortcutDisplay[1])
  const [editTemplate, setEditTemplate] = useState(false);
  const [iconColour, setIconColour] = useState('#2F2F2F')

  const [socialIcons, setSocialIcons] = useState([
    { icon: <Facebook color={iconColour}/>, selected: false },
    { icon: <Instagram color={iconColour}/>, selected: false },
    { icon: <XTwitter color={iconColour}/>, selected: false },
    { icon: <Tiktok color={iconColour}/>, selected: false },
    { icon: <Youtube color={iconColour}/>, selected: false },
    { icon: <Gmail color={iconColour}/>, selected: false },
    { icon: <LinkedIn color={iconColour}/>, selected: false },
    { icon: <Kakaotalk color={iconColour}/>, selected: false },
    { icon: <GoogleHangouts color={iconColour}/>, selected: false },
    { icon: <Line color={iconColour}/>, selected: false },
    { icon: <WeChat color={iconColour}/>, selected: false },
    { icon: <Messenger color={iconColour}/>, selected: false },
    { icon: <Tinder color={iconColour}/>, selected: false },
    { icon: <Reddit color={iconColour}/>, selected: false },
    { icon: <Clubhouse color={iconColour}/>, selected: false },
    { icon: <Discord color={iconColour}/>, selected: false },
    { icon: <WhatsApp color={iconColour}/>, selected: false },
    { icon: <Snapchat color={iconColour}/>, selected: false },
    { icon: <Threads color={iconColour}/>, selected: false },
    { icon: <Twitch color={iconColour}/>, selected: false },
    { icon: <OnlyFans color={iconColour}/>, selected: false },
  ]);

  const [shoppingIcons, setShoppingIcons] = useState([
    { icon: <Amazon color={iconColour}/>, selected: false },
    { icon: <Lazada color={iconColour}/>, selected: false },
    { icon: <Shopee color={iconColour}/>, selected: false },
    { icon: <TiktokShop color={iconColour}/>, selected: false },
    { icon: <HomeSmile color={iconColour}/>, selected: false },
    { icon: <Ebay color={iconColour}/>, selected: false },
    { icon: <Shopify color={iconColour}/>, selected: false },
    { icon: <Globe02 color={iconColour}/>, selected: false },
    { icon: <Linemyshop color={iconColour}/>, selected: false },
  ]);

  const [otherIcons, setOtherIcons] = useState([
    { icon: <YoutubeMusic color={iconColour}/>, selected: false },
    { icon: <Signal color={iconColour}/>, selected: false },
    { icon: <Soundcloud color={iconColour}/>, selected: false },
    { icon: <Spotify color={iconColour}/>, selected: false },
    { icon: <AppleMusic color={iconColour}/>, selected: false },
    { icon: <Telegram color={iconColour}/>, selected: false },
    { icon: <AppleFacetime color={iconColour}/>, selected: false },
    { icon: <GoogleMaps color={iconColour}/>, selected: false },
    { icon: <Pinterest color={iconColour}/>, selected: false },
    { icon: <Giphy color={iconColour}/>, selected: false },
    { icon: <Dropbox color={iconColour}/>, selected: false },
    { icon: <Onedrive color={iconColour}/>, selected: false },
    { icon: <WeTransfer color={iconColour}/>, selected: false },
    { icon: <Patreon color={iconColour}/>, selected: false },
    { icon: <Blogger color={iconColour}/>, selected: false },
    { icon: <Deviantart color={iconColour}/>, selected: false },
    { icon: <Invision color={iconColour}/>, selected: false },
    { icon: <Behance color={iconColour}/>, selected: false },
    { icon: <Dribbble color={iconColour}/>, selected: false },
    { icon: <GoogleDrive color={iconColour}/>, selected: false },
  ]);

  //switch profile
  const [valueSwitch1, setValueSwitch1] = useState(false)
  const [valueSwitch2, setValueSwitch2] = useState(false)

  // Link Inputs

  const [isSaving, setIsSaving] = useState(false);
  const [linkInputListsWhenSaved, setLinkInputListsWhenSaved] = useState([]);
  const [linkInputLists, setLinkInputLists] = useState([])
  const [IconInputListsWhenSaved, setIconInputListsWhenSaved] = useState([]);
  const [iconInputLists, setIconInputLists] = useState([])
  const [linkplacementTemp, setLinkPlacementTemp] = useState('bot')
  const [linkplacement, setLinkPlacement] = useState('bot')


  const saveData = () => {
    setIsSaving(true);
    setImage(tempImage)
    setBirthdateProfile(birthdateTempProfile)
    setButton(buttonTemp);
    setDescription(descriptionTemp)
    setEmailProfile(emailTempProfile)
    setSelectedEmoji(selectedTempEmoji)
    setLinkColor(linkColorTemp)
    setZaviagoColor(zaviagoTempColor)
    setNameProfile(nameTempProfile)
    setSurnameProfile(surnameTempProfile)
    setTemplate(templateTemp)
    setName(surnameTempProfile)
    dataUpdateUser.zaviago_color = zaviagoTempColor;
    dataUpdateUser.user_image = tempImage;
    dataUpdateUser.birthday_profile = birthdateTempProfile;
    dataUpdateUser.button = buttonTemp;
    dataUpdateUser.description = descriptionTemp;
    dataUpdateUser.email_profile = emailTempProfile;
    dataUpdateUser.emoji = selectedTempEmoji;
    dataUpdateUser.link_color = linkColorTemp;
    dataUpdateUser.name_profile =nameTempProfile;
    dataUpdateUser.surname_profile = surnameTempProfile;
    dataUpdateUser.template = templateTemp;

    Update();
    setTimeout(() => {
      goPrevTo('');
      setLinkInputListsWhenSaved(linkInputLists);
      setBtnTitleWhenSaved(btnTitle);
    }, 1000)
    setTimeout(() => {
      setIsSaving(false)
    }, 1500)
  }

  const cancelData = () => {
    goPrevTo('');
    setTimeout(() => {
      setBtnTitle(btnTitleWhenSaved);
      setLinkInputLists(linkInputListsWhenSaved)
    }, 1500)
  }

  const [linkInputs, setLinkInputs] = useState([
    { linkName: '', url: '', inputError: false, inputUrlError: false, linkNameErrorText: '', linkUrlErrorText: '' },
  ]);

  const addLinkInput = () => {
    setLinkInputs([
      ...linkInputs,
      { linkName: '', url: '', inputError: false, inputUrlError: false, linkNameErrorText: '', linkUrlErrorText: '' },
    ]);
  };

  const removeLinkInput = (index) => {
    const updatedInputs = [...linkInputs];
    updatedInputs.splice(index, 1);
    setLinkInputs(updatedInputs);
    setLinkInputLists(updatedInputs);
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedInputs = [...linkInputs];
    updatedInputs[index][name] = value;
    setLinkInputs(updatedInputs);
    setLinkInputLists(updatedInputs);
  };

  const saveLinkInputs = () => {
    setLinkInputLists([...linkInputs]);
  };

  // Icon Inputs

  const [iconInputs, setIconInputs] = useState([
    {icon: null, url: '', selected: false}
  ]);

  const addIconInput = (icon, index) => {
    const updatedSocialIcons = [...socialIcons];
    const updatedShoppingIcons = [...shoppingIcons];
    const updatedOtherIcons = [...otherIcons];
    updatedSocialIcons[index].selected = true;
    updatedShoppingIcons[index].selected = true;
    updatedOtherIcons[index].selected = true;
    setSocialIcons(updatedSocialIcons);
    setShoppingIcons(updatedShoppingIcons);
    setOtherIcons(updatedOtherIcons);
    setIconInputs([...iconInputs, {icon: icon}]);
  };

  const removeIconInput = (index) => {
    const updatedSocialIcons = [...socialIcons];
    const updatedShoppingIcons = [...shoppingIcons];
    const updatedOtherIcons = [...otherIcons];
    const updatedInputs = [...iconInputs];
    updatedInputs.splice(index, 1);
    updatedSocialIcons[index].selected = false;
    updatedShoppingIcons[index].selected = false;
    updatedOtherIcons[index].selected = false;
    setSocialIcons(updatedSocialIcons);
    setShoppingIcons(updatedShoppingIcons);
    setOtherIcons(updatedOtherIcons);
    setIconInputs(updatedInputs);
  };

  const saveIconInputs = () => {
    setIconInputLists([...iconInputs]);
  };

  const [goNextSlideLeft, setGoNextSlideLeft] = useState(false);
  const [goNextSlideRight, setGoNextSlideRight] = useState(false);
  const [goBackSlideLeft, setGoBackSlideLeft] = useState(false);
  const [goBackSlideRight, setGoBackSlideRight] = useState(false);

  const [page, setPage] = useState('');

  const goPrevTo = (p) => {
    setGoBackSlideRight(true);
    setTimeout(() => {
      setGoBackSlideRight(false);
      setGoBackSlideLeft(true);
      setPage(p);
    }, 600)
    setTimeout(() => {
      setGoBackSlideLeft(false);
    }, 1200)
  }

  const goNextTo = (p) => {
    setGoNextSlideLeft(true);
    setTimeout(() => {
      setGoNextSlideRight(true);
      setGoNextSlideLeft(false);
      setPage(p);
    }, 600)
    setTimeout(() => {
      setGoNextSlideRight(false);
    }, 1200)
  }


  const titleHTML = useRef(null)
  const handleButtonClick = (templatenumber) => {
    setTempTemplate(templatenumber)
    // You can set the new template here
    const value = Number(templatenumber);
    changelinkColor(tabLinkColor[value - 1][0] ,tabLinkColor[value - 1][1] )
    changeZaviagoColor(tabLinkColor[value - 1][1])
  };
  const changeZaviagoColor = (color) => {
    fetch(zaviago)
    .then(response => response.text())
    .then(svgData => {
      // Modify the SVG data here
      modifySVGColor(svgData, color );
    })
    .catch(error => {
      console.error('Error loading SVG:', error);
    });
  }
  const generateImagePaths = (id) => {
    const imageFolder = `./src/templates/template${id}`;
    const imagePaths = [];

    for (let i = 1; i <= 4; i++) {
      const imagePath = `${imageFolder}/${i}.png`;
      imagePaths.push(imagePath);
    }

    return imagePaths;
  }

  // Function to modify SVG fill color
  const modifySVGColor =  (svgString, newFillColor)  => {
    // Use DOMParser to parse the SVG string
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(svgString, 'image/svg+xml');

    // Modify the fill attribute of the relevant SVG elements
    const elementsToModify = xmlDoc.querySelectorAll('[fill]');
    elementsToModify.forEach((element) => {
      element.setAttribute('fill', newFillColor);
    });

    // Serialize the modified SVG back to a string
    const modifiedSVGString = new XMLSerializer().serializeToString(xmlDoc);
    setModifiedSVG(modifiedSVGString);
  }
  const tabLinkColor = [
    ['#04C900' ,'#000000'],
    ['#C90000', '#000000'],
    ['#0050C9','#000000'],
    ['#000000','#000000'],
    ['#FFFFFF','#FFFFFF'],
    ['#FFFFFF','#FFFFFF'],
    ['#000463','#000463'],
    ['#FFFFFF','#FFFFFF'],
    ['#9E6BEC','#9E6BEC'],
    ['#59267A','#59267A'],
    ['#FFFFFF','#FFFFFF'],
    ['#FFFFFF','#FFFFFF'],
    ['#F5804B','#F5804B'],
    ['#FFDF00','#383838'],
    ['#E9C0E9','#E9C0E9'],
    ['#FFFFFF','#FFFFFF'],
    ['#000000','#000000'],
    ['#FFFFFF','#FFFFFF'],
    ['#1D232F','#1D232F'],
    ['#062CD3','#062CD3'],
    ['#E15CFF','#E15CFF'],
    ['#FFFFFF','#FFFFFF'],
    ['#FFFFFF','#FFFFFF'],
    ['#FFFFFF','#FFFFFF'],
    ['#FFFFFF','#FFFFFF'],
    ['#181818','#000000'],
    ['#1DB2FF','#1DB2FF'],
    ['#FFFFFF','#FFFFFF'],
    ['#3461FF','#3461FF'],
    ['#625A50','#625A50'],
    ['#FFFFFF','#FFFFFF'],
    ['#FFFFFF','#FFFFFF'],
    ['#663800','#663800'],
    ['#393752','#393752'],
    ['#FFFFFF','#FFFFFF'],
    ['#000000','#000000'],
    ['#FFFFFF','#FFFFFF'],
    ['#FFFFFF','#FFFFFF'],
    ['#FFFFFF','#FFFFFF'],
    ['#FFFFFF','#FFFFFF'],
  ]

  useEffect(() => {
    if(errorDataUser)
    {
      toast({
        title: 'Error while fetching data',
        description : errorDataUser,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
    if (dataUser)
    {
      if(dataUser.user_image){
        setImage(dataUser.user_image)
        setTempImage(dataUser.user_image)
        dataUpdateUser.user_image = dataUser.user_image
      };
      if(dataUser.template){
        setTemplate(dataUser.template)
        setTempTemplate(dataUser.template)
        dataUpdateUser.template = dataUser.template;
      }
      if(dataUser.surname_profile)
      {
        setName(dataUser.surname_profile)
        setTempName(dataUser.surname_profile)
        setSurnameProfile(dataUser.surname_profile)
        setSurnameTempProfile(dataUser.surname_profile)
        dataUpdateUser.surname_profile = dataUser.surname_profile;
      }
      if(dataUser.email_profile)
      {
        setEmailProfile(dataUser.email_profile)
        setEmailTempProfile(dataUser.email_profile)
        dataUpdateUser.email_profile = dataUser.email_profile;
      }
      if(dataUser.birthday_profile)
      {
        setBirthdateProfile(dataUser.birthday_profile)
        setBirthdateTempProfile(dataUser.birthday_profile)
        dataUpdateUser.birthday_profile = dataUser.birthday_profile;
      }
      if(dataUser.button)
      {
        setButton(dataUser.button)
        setTempButton(dataUser.button)
        dataUpdateUser.button = dataUser.button;
      }
      if(dataUser.description)
      {
        setDescription(dataUser.description)
        setTempDescription(dataUser.description)
        dataUpdateUser.description = dataUser.description;
      }
      if(dataUser.emoji)
      {
        setSelectedEmoji(dataUser.emoji)
        setSelectedTempEmoji(dataUser.emoji)
        setEmoji(true)
        dataUpdateUser.emoji = dataUser.emoji;
      }
      if(dataUser.name_profile)
      {
        setNameProfile(dataUser.name)
        setTempNameProfile(dataUser.name)
        dataUpdateUser.name_profile = dataUser.name;
      }
      if(dataUser.link_color)
      {
        setLinkColor(dataUser.link_color);
        setTempLinkColor(dataUser.link_color);
        dataUpdateUser.link_color = dataUser.link_color;
      }
      if(dataUser.zaviago_color)
      {
        setZaviagoColor(dataUser.zaviago_color);
        setZaviagoTempColor(dataUser.zaviago_color);
        dataUpdateUser.zaviago_color = dataUser.zaviago_color;
        changeZaviagoColor(dataUser.zaviago_color)
      }
    }
    mutateDataUser();
  }, [dataUser, dataUpdateUser]);

  const changelinkColor = (color1, color2) => {
    setTempLinkColor(color1);
    setZaviagoTempColor(color2)
  }

  const copyLink = () => {
    navigator.clipboard.writeText(mylink);
    document.execCommand('copy', true, mylink);
    setCopyIcon(<CheckCircle color='#FF4A00' viewBox='0 0 24 24' width='20' height='20'/>)
    setCopyText('คัดลอกแล้ว')
  }

  //qr code download

  const qrCodeRef = useRef(null);

  const handleDownloadClick = async() => {
    const svgElement = qrCodeRef.current;

    // SVG to XML
    const serializer = new XMLSerializer();
    const svgXml = serializer.serializeToString(svgElement);

    // Créer un élément image
    const img = new Image();
        // Demander l'autorisation de téléchargement
      if(navigator.permissions.request)
      {
        const permissionStatus = await navigator.permissions.request({
          name: 'download',
        });
        if (permissionStatus.state === 'granted') {
          alert('Start downloading');
          try{
            img.onload = () => {
              const canvas = document.createElement('canvas');
              const context = canvas.getContext('2d');
        
              // Définir la taille du canevas en fonction de l'image
              canvas.width = img.width;
              canvas.height = img.height;
        
              // Dessiner l'image sur le canevas
              context.drawImage(img, 0, 0);
        
              // Convertir le canevas en base64 PNG
              const pngDataUrl = canvas.toDataURL('image/png');
        
              // Créer un lien de téléchargement
              const downloadLink = document.createElement('a');
              downloadLink.href = pngDataUrl;
              downloadLink.download = 'qrcode.png';
              downloadLink.click();
            }
  
            } catch (error) {
              alert("Error while downloading: " + error.message);
            }
           // Charger l'élément image avec l'élément SVG en tant que source de données
           const blob = new Blob([svgXml], { type: 'image/svg+xml' });
           const url = URL.createObjectURL(blob);
           img.src = url;
           alert("File downloaded !");
        } else {
          alert('Téléchargement annulé ou non autorisé.');
        }
      }else{
        alert('Start downloading');
        try{
          img.onload = () => {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
      
            // Définir la taille du canevas en fonction de l'image
            canvas.width = img.width;
            canvas.height = img.height;
      
            // Dessiner l'image sur le canevas
            context.drawImage(img, 0, 0);
      
            // Convertir le canevas en base64 PNG
            const pngDataUrl = canvas.toDataURL('image/png');
      
            // Créer un lien de téléchargement
            const downloadLink = document.createElement('a');
            downloadLink.href = pngDataUrl;
            downloadLink.download = 'qrcode.png';
            downloadLink.click();
          }
        } catch (error) {
          alert("Error while downloading: " + error.message);
        }
        // Charger l'élément image avec l'élément SVG en tant que source de données
        const blob = new Blob([svgXml], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);
        img.src = url;
        alert("File downloaded !");

      }

}



//qr code share
const handleShareClick = async(link) => {
  // Vérifiez si le navigateur prend en charge le partage
  if (navigator?.share) {
    try{
      navigator.share({
        title: 'my link',
        text: link,
        url: link
        })
    }catch (err) {
      onError?.(err);
    }
  } else {
  };
    // Utilisez l'API Web de partag
}


  return (
    <>
    <div className={`h-screen template${templateTemp}`}>
      <header className="border-b border-b-gray-200 head">
        <div className={`${goNextSlideLeft ? 'go-next-slide-left' : goNextSlideRight ? 'go-next-slide-right' : goBackSlideLeft ? 'go-back-slide-left' : goBackSlideRight ? 'go-back-slide-right' : ''}`}>
          {page === 'edit' ? (
            <header className='px-4 py-3 flex items-center h-[64px] bg-white'>
              <div className='w-1/3 text-left'>
                <button onClick={() => {
                  setTempImage(image)
                  setBirthdateTempProfile(birthdateProfile)
                  setTempButton(button);
                  setTempDescription(description)
                  setEmailTempProfile(emailProfile)
                  setSelectedTempEmoji(selectedEmoji)
                  setTempLinkColor(linkColor)
                  setTempNameProfile(nameProfile)
                  setSurnameTempProfile(surnameProfile)
                  setTempTemplate(template)
                  setTempName(surnameProfile)
                  setZaviagoTempColor(zaviagoColor)
                  changeZaviagoColor(zaviagoColor)
                  cancelData();
                }} className="text-[#FF4A00] font-bold">ยกเลิก</button>
              </div>
              <div className='w-1/3 text-center'>
                <h2 className="text-gray-900 font-bold">แก้ไข</h2>
              </div>
              <div className='w-1/3 text-right flex justify-end'>
                {isSaving ? (
                  <LoadingSave />
                ) : (
                  <button className="text-[#FF4A00] font-bold" onClick={saveData}>บันทึก</button>
                )}
              </div>
            </header>
          ) : page === 'profile' ? (
            <header className='flex p-3 pl-4 justify-between items-center flex-1 self-stretch'>
              <div className='flex justify-center items-center gap-[10px]'>
                <h2 className="w-auto text-gray-900 font-Eventpop text-[20px] font-semibold leading-8">บัญชีและความเป็นส่วนตัว</h2>
              </div>
              <div className='flex p-2 justify-center items-center gap-2 rounded-lg bg-base-white'>
                <button onClick={() => goPrevTo('')} className="w-auto"><XClose color='#101828'/></button>
              </div>
            </header>
          ) : page === 'contact' ? (
            <header className='flex p-3 pl-4 justify-between items-center flex-1 self-stretch'>
              <div className='flex justify-center items-center gap-[10px]'>
                <h2 className='w-auto text-gray-900 font-Eventpop text-[20px] font-semibold leading-8'>ติดต่อเรา</h2>
              </div>
              <div className='flex p-2 justify-center items-center gap-2 rounded-lg bg-base-white'>
                <button onClick={() => goPrevTo('')} className="w-auto"><XClose color='#101828'/></button>
              </div>
            </header>
          ) : page === 'privacyPolicy' ? (
          <>
            <header className='flex p-3 pl-4 justify-between items-center flex-1 self-stretch'>
              <div className='flex justify-center items-center gap-[10px]'>
                <h2 className='w-auto text-gray-900 font-Eventpop text-[20px] font-semibold leading-8'>นโยบายความเป็นส่วนตัว</h2>
              </div>
              <div className='flex p-2 justify-center items-center gap-2 rounded-lg bg-base-white'>
                <button onClick={() => goPrevTo('profile')} className="w-auto"><XClose color='#101828'/></button>
              </div>
            </header>
          </>
          ) : page === 'consent' ? (
          <>
            <header className='flex p-3 pl-4 justify-between items-center flex-1 self-stretch'>
              <div className='flex justify-center items-center gap-[10px]'>
                <h2 className='w-auto text-gray-900 font-Eventpop text-[20px] font-semibold leading-8'>จัดการข้อมูลความเป็นส่วนตัว</h2>
              </div>
              <div className='flex p-2 justify-center items-center gap-2 rounded-lg bg-base-white'>
                <button onClick={() => goPrevTo('profile')} className="w-auto"><XClose color='#101828'/></button>
              </div>
            </header>
          </>
          ): (
            <header className='px-4 py-3 flex items-center justify-between h-[64px] bg-white'>
              <div className='flex gap-x-[10px]'>
                <img src={bioIcon} />
                <h1 className='text-gray-900 inter font-semibold text-xl'>hitlink</h1>
              </div>

              <button onClick={() => setOpenAccountMenu(true)}>
                <Menu02 />
              </button>
            </header>
          )}
        </div>
      </header>

      <main style={{ height: 'calc(100vh - 9em )'}} className={`  ${goNextSlideLeft ? 'go-next-slide-left' : goNextSlideRight ? 'go-next-slide-right' : goBackSlideLeft ? 'go-back-slide-left' : goBackSlideRight ? 'go-back-slide-right' : ''}`}>
        {page === 'edit' ? (
          <>
            <section className="flex h-[33px] items-center justify-center bg-[#FF4A00]">
              <p className="text-sm text-white">สามารถกดเพื่อเลือกสิ่งที่ต้องการแก้ไข</p>
            </section>
            <section className="section" onClick={() => setOpenEditProfile(true)}>
              <div className="flex justify-end">
                <Edit05 color='#FF4A00' viewBox='0 0 24 24' width='16' height='16'/>
              </div>
              <div className='w-[96px] m-auto relative'>
                {image ? (
                  <div className="img-profile">
                    <img src={tempImage}  className='h-full w-full bg-blue-500 rounded-full' />
                  </div>
                ) : (
                  <label htmlFor='uploadImg'>
                    <div className="img-profile">
                      <Image01 color='white'  />
                    </div>

                    <input type='file' id='uploadImg' name='profile-img' className='hidden'/>
                  </label>
                )}

                {emoji ? (
                  <div className='emoji-profile bg-transparent'>
                    <Emoji unified={selectedTempEmoji} size={24}/>
                  </div>
                ) : (
                  <div className='emoji-profile inactive'>
                    <FaceSmile color='#FF4A00'/>
                  </div>
                )}
              </div>

              <div className="mt-6">
                <h2 className="noto font-bold text-xl">{nameTemp}</h2>
                <p className="mt-[18px] noto">{descriptionTemp}</p>
              </div>
            </section>

            {linkplacementTemp === 'top' &&  (<section className="section-2" onClick={() => {
              setOpenAddButtonModal(true);
              setAddBtnMenuActive(2);
              setSelectCustomise(true)
            }}>
              <div className="flex justify-end px-4">
                <Edit05 color='#FF4A00' viewBox='0 0 24 24' width='16' height='16'/>
              </div>
              <div className="flex justify-center gap-x-5 mt-6">
                <Facebook color={linkColorTemp}/>
                <Instagram color={linkColorTemp} />
                <XTwitter color={linkColorTemp} />
              </div>
            </section>)}

            <section className="section" onClick={() => setOpenChangeTitle(true)}>
              <div className="flex justify-end">
                <Edit05 color='#FF4A00' viewBox='0 0 24 24' width='16' height='16'/>
              </div>
              <h2 className="font-bold noto">{btnTitle}</h2>
            </section>

            <section className="section" onClick={() => setOpenAddButtonModal(true)}>
              <div className="flex justify-end">
                <Edit05 color='#FF4A00' viewBox='0 0 24 24' width='16' height='16'/>
              </div>
              <div className="mt-3 flex flex-col gap-y-4">
                {linkInputLists.map((link) =>
                  <div className="flex items-center gap-x-2">
                    <button href={link.url} className="linkbutton">{link.linkName}</button>
                  </div>
                )}
              </div>
            </section>

            {linkplacementTemp === 'bot' &&  (<section className="section-2" onClick={() => {
              setOpenAddButtonModal(true);
              setAddBtnMenuActive(2);
              setSelectCustomise(true)
            }}>
              <div className="flex justify-end px-4">
                <Edit05 color='#FF4A00' viewBox='0 0 24 24' width='16' height='16'/>
              </div>
              <div className="flex justify-center gap-x-5 mt-6">
                <Facebook color={linkColorTemp}/>
                <Instagram color={linkColorTemp} />
                <XTwitter color={linkColorTemp} />
              </div>
            </section>)}
          </>
        ) : page === 'profile' ? (
          <>
            <div className="bg-white" style={{height:"calc(100vh - 245px)"}}>
              <div className='inline-flex flex-col items-center gap-[30px] w-full'>
                <div className='pl-4 p-r4 pt-[30px] flex flex-col items-start gap-[4px] w-full'>
                    <h1 className='text-gray-900 font-Eventpop text-[24px] font-semibold leading-8 w-full text-left'>Olivia Rhye </h1>
                    <p className='text-gray-600 font-Inter text-base font-normal leading-6 w-full text-left'>olivia@untitledui.com</p>
                    <div className='w-full inline-flex'><p className=' text-gray-600 font-Inter text-base font-normal leading-6 text-left '>วันเกิด :</p> <span className=' text-gray-600 font-Inter text-base font-normal leading-6 text-left'>14-02-1998</span></div>       
                </div>
                <div className='w-full h-[1px] bg-[#EAECF0]'></div>
                <div className='flex flex-col items-center gap-[16px] w-full'>
                    <h1 className=' pl-4 pr-4 text-gray-900 font-Eventpop text-[24px] font-semibold leading-8 w-full text-left'>Privacy Policy</h1>
                    <div className='w-full h-[82-px]'>
                        <button onClick={() => {goNextTo('privacyPolicy')}} className='w-full inline-flex pt-[10px] pb-[10px] items-start gap-[45px] pl-4 pr-4 justify-between '>
                          <p className='w-[222px]  text-left text-[#667085] font-Eventpop text- font-normal leading-5 tracking-tighter'>นโยบายความเป็นส่วนตัว</p>
                          <div><ChevronRight color='#667085'/></div>
                        </button>
                        <div className='w-full h-[1px] bg-[#EAECF0]'></div>
                        <button onClick={() => {goNextTo('consent')}} className='w-full inline-flex pt-[10px] pb-[10px] items-start gap-[45px] pl-4 pr-4 justify-between'>
                          <p className='w-[222px] text-left text-[#667085] font-Eventpop text-[14px] font-normal leading-5 tracking-tighter'>จัดการข้อมูลความเป็นส่วนตัว</p>
                          <div  ><ChevronRight color='#667085'/></div>
                        </button>
                    </div>
                </div>
                <div className='pl-[16px] pr-[16px] w-full'>
                  <p className='w-full text-gray-400 text-center font-Eventpop text-xs font-normal leading-5 tracking-tighter'>Learn how we collect, use and disclose your  personal data and understand your rights by checking out our <span className='underline'>Privacy Notice</span></p>
                </div>
              </div>
            </div>
          </>
        ) : page === 'contact' ?(
          <>
           <div className="bg-white pt-[30px]" style={{height:"calc(100vh - 245px)"}}>
            <div className='w-full h-auto flex-shrink-0 flex flex-col gap-[10px]'>
              <div className='inline-flex flex-col items-center gap-[16px] w-full'>
                <h1 className='w-full text-gray-900 font-Eventpop text-[24px] font-semibold leading-8 text-left pl-[16px] pr-[16px]'>ติดต่อเรา</h1>
                <div className='w-full h-auto'>
                  <div className='pb-[10px] pt-[10px] pl-[16px] pr-[16px] w-full h-auto'>
                    <button className='w-full h-auto inline-flex items-start justify-between gap-[45px]'>
                      <p className='w-auto text-[#667085] font-Eventpop text-[14px] font-normal leading-5 tracking-tighter'>Zaviago LINE OA</p>
                      <div className='w-[20px] h-[20px]'><ChevronRight color='#667085'/></div>
                    </button>
                  </div>
                  <div className='w-full h-[1px] bg-[#EAECF0]' ></div>
                </div>
              </div>
              <div className='w-full h-auto flex-shrink-0  gap-[10px] flex flex-col items-start' >
                <p className='w-auto pl-[16px] pr-[16px] text-[#667085] font-Eventpop text-[14px] font-normal leading-5 tracking-tighter'>ติดตามข่าวสารและบริการอื่นๆ จากเราได้ที่</p>
                <div className='w-full h-auto inline-flex items-start gap-[16px] pl-[16px] pr-[16px]'>
                  <button className='w-[42px] h-[42px] flex justify-center items-center'>
                    <Facebook/>
                  </button>
                  <button className='w-[42px] h-[42px] flex justify-center items-center'>
                    <Instagram/>
                  </button>
                  <button className='w-[42px] h-[42px] flex justify-center items-center'>
                    <Globe02/>
                  </button>
                </div>
                <div className='w-full h-[1px] bg-[#EAECF0]' ></div>
              </div>
            </div>
           </div>
          </>
        ): page === 'privacyPolicy' ? (
        <>
        <div className="bg-white pt-[30px] overflow-y-scroll " style={{height:"calc(100vh - 245px)"}}>
          <div className='w-full h-auto pl-[16px] pr-[16px] inline-flex flex-col items-center gap-[30px]' >
            <h1 className='text-gray-900 font-Eventpop text-[24px] font-semibold leading-8 text-left w-full'>
              นโยบายความเป็นส่วนตัว<br />(Privacy Policy)
            </h1>
            <p className='text-gray-600 font-Inter text-base font-normal leading-6 w-full text-left h-auto'>When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control.When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control. You can use our services in a variety of ways to manage your privacy. For example, you can sign up for a watching YouTube videos. You can also choose to browse the web in a private mode, like Chrome Incognito mode. And across our services, you can adjust your privacy settings to control what we collect and how your information is used.</p>
          </div>
        </div>
        </>
        ) : page === 'consent' ? (
        <>
        <div className="bg-white pt-[30px] overflow-y-scroll " style={{height:"calc(100vh - 245px)"}}>
          <div className='w-full h-auto inline-flex flex-col items-center gap-[30px]' >
            <div className='w-full h-auto pl-[16px] pr-[16px] inline-flex flex-col items-center gap-[4px]'>
              <h1 className='text-gray-900 font-Eventpop text-[24px] font-semibold leading-8 text-left w-full'>
                จัดการข้อมูลความเป็นส่วนตัว
              </h1>
              <p className='text-gray-600 font-Inter text-base font-normal leading-6 w-full text-left h-auto'>When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control. You can use our services in a variety of ways to manage your privacy. For example, you can sign up for a watching YouTube videos. You can </p>
            </div>
            <div className='w-full h-auto inline-flex flex-col items-center'>
              <div className='w-full h-[1px] bg-[#EAECF0]' ></div>
              <div className='w-full h-auto pl-[16px] pr-[16px]'>
                <div className='w-full h-auto pt-[10px] pb-[10px] inline-flex items-start justify-between'>
                  <p className=' w-auto text-[#667085] font-Eventpop text-[14px] font-normal leading-5 tracking-tighter'>Consent for marketing purposes</p>
                  <Switch value={valueSwitch1}  onChange={() => {setValueSwitch1(!valueSwitch1)}}></Switch>
                </div>
              </div>
              <div className='w-full h-[1px] bg-[#EAECF0]' ></div>
              <div className='w-full h-auto pl-[16px] pr-[16px]'>
                <div className='w-full h-auto pt-[10px] pb-[10px] inline-flex items-start justify-between'>
                  <p className=' w-auto text-[#667085] font-Eventpop text-[14px] font-normal leading-5 tracking-tighter'>Consent for marketing purposes</p>
                  <Switch value={valueSwitch2} onChange={() => {setValueSwitch2(!valueSwitch2)}}></Switch>
                </div>
              </div>
              <div className='w-full h-[1px] bg-[#EAECF0]' ></div>
            </div>
          </div>
        </div>
        </>
        ) : (
          <>
          <section className="px-4 pb-6 pt-[30px] border-b border-b-gray-200 header bg-white">
            <h1 className="text-left text-gray-900 text-[24px] font-bold">ยินดีต้อนรับ, คุณ {nameProfile}</h1>
            <div className="flex gap-x-2 mt-4">
              <button className="secondary-btn gap-x-2 flex items-center justify-center" style={{padding:"10px 0"}} onClick={() => {
                  if (iKnowEdit){
                    goNextTo('edit');
                  } else {
                    setOpenEdit(true)
                  }
                }}>
                <Edit05 />
                แก้ไข
              </button>
              <button
                className="main-btn gap-x-2 flex items-center justify-center" style={{padding:"10px 0"}}
                onClick={() => setOpenShare(true)}
              >
                <Share06 />
                แชร์
              </button>
            </div>
          </section>

          <section className="section-profile-1">
            <div className='w-[96px] m-auto relative'>
              {image ? (
                <div className="img-profile">
                  <img src={image}  className='h-full w-full bg-blue-500 rounded-full'/>
                </div>
              ) : (
                <div className="img-profile">
                  <Image01 color='white' />
                </div>
              )}

              {emoji ? (
                <div className='w-7 h-7 pt-[1px] bg-transparent rounded-full absolute bottom-0 right-0 flex justify-center items-center'>
                  <Emoji unified={selectedEmoji} size={24}/>
                </div>
              ) : (
                <div className='w-7 h-7 pt-[1px] bg-[#FFE9DD] rounded-full absolute bottom-0 right-0 flex justify-center items-center'>
                  <FaceSmile color='#FF4A00'/>
                </div>
              )}
            </div>

            <div className="mt-6">
              <h2 className="noto font-bold text-xl">{name}</h2>
              <p className="mt-[18px] noto">{description}</p>
            </div>
          </section>
          {linkplacement === 'bot' &&(
          <section className="pt-[34px] p-4 section-profile-2">
            <h2 ref={titleHTML} className=" font-bold noto">{btnTitleWhenSaved}</h2>

            <div className="mt-4 flex flex-col gap-y-4">
              {linkInputListsWhenSaved.map((link) =>
                <div className="flex items-center gap-x-2">
                  <a href={'https://' + link.url} className="linkbutton">{link.linkName}</a>
                </div>
              )}
            </div>

            <div className="flex justify-center gap-x-5 mt-6">
              <Facebook color={linkColor} />
              <Instagram color={linkColor}/>
              <XTwitter color={linkColor}/>
            </div>
          </section>)}
          </>
        )}
      </main>

      <button onClick={() => setOpenAddButtonModal(true)} className="z-10 main-btn fixed right-4 bottom-6 items-center justify-center flex w-[52px] h-[40px] opacity-0" style={{padding:0,animation:page === 'edit' ? 'fadeIn 500ms forwards, bounceAnim 6s ease-in-out infinite' : 'fadeOut 500ms forwards',animationDelay:page === 'edit' ? "800ms" : '0ms'}}>
        <Edit01 color='white' viewBox='0 0 24 24'/>
      </button>

      <footer className={`footer ${goNextSlideLeft ? 'go-next-slide-left' : goNextSlideRight ? 'go-next-slide-right' : goBackSlideLeft ? 'go-back-slide-left' : goBackSlideRight ? 'go-back-slide-right' : ''}`}>
        <h3 className={`h-auto w-auto title`} style={{backgroundColor: page === 'profile' ? 'white' : null}}>
          Powered by   <div className={'svg'}>
          {modifiedSVG && (
            <div
              dangerouslySetInnerHTML={{ __html: modifiedSVG }}
            />
          )}
        </div>
        </h3>
      </footer>
    </div>

      <Transition.Root show={openAddButtonModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => {
          setOpenAddButtonModal(false);
          setTimeout(() => {
            setSelectCustomise(false)
          }, 400)
        }}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-t-[40px] bg-white text-left shadow-xl transition-all sm:my-8 w-full">
                  <div className="flex justify-center flex-col">
                    <div className="text-center p-4 border-b border-b-[#EAECF0]">
                      <Dialog.Title as="h3" className="text-base font-bold leading-6 text-[#101828] relative">
                        {addShortcut && (
                          <button className="absolute left-0" onClick={() => {setAddShortcut(false)}}>
                            <ChevronLeft color='#667085'/>
                          </button>
                        )}
                        {addBtnMenuActive === 0 && 'เพิ่มปุ่ม'}
                        {addBtnMenuActive === 1 && 'เทมเพลต'}
                        {addBtnMenuActive === 2 && <>{addShortcut === true ? 'เพิ่มปุ่มลัด' : 'ปรับแต่ง'}{selectCustomise === true ?
                        <button className="absolute left-0" onClick={() => {setSelectCustomise(false);setUpdateBtnTitle(btnTitle),setAddBtnMenuActive(2),setOpenAddButtonModal(true)}}>
                            <ChevronLeft color='#667085'/>
                          </button> : null }</>}
                        {addBtnMenuActive === 3 && <>
                          <button className="absolute left-0" onClick={() => {setAddBtnMenuActive(1); setAddShortcut(false);setSubNumTemplates(1);setFocus(0) }}>
                            <ChevronLeft color='#667085'/>
                          </button>
                          เทมเพลต
                        </>}
                      </Dialog.Title>
                    </div>

                    {addBtnMenuActive === 0 && (
                      <div className="p-4">
                        <Dialog.Description as='p' className='text-gray-600 text-sm text-center'>
                          กรุณากรอกชื่อปุ่มและ Url ของปุ่ม
                        </Dialog.Description>

                        <div className="mt-4">
                          <div className="overflow-y-auto" style={{maxHeight:"calc(100vh - 380px)"}}>
                            {linkInputs.map((input, index) => (
                              <div key={index}>
                                <div className={`flex items-center${linkInputs.length > 1 ? ' gap-x-[10px]' : ''}`}>
                                  <div className="flex flex-col gap-y-[6px] grow">
                                    <input
                                      type="text"
                                      className="form-input with-shadow"
                                      name="linkName"
                                      placeholder="ชื่อลิงก์"
                                      value={input.linkName}
                                      onChange={(e) => handleInputChange(index, e)}
                                    />
                                    {input.inputError && (
                                      <p className="noto text-[#F04438] text-sm">
                                        {input.linkNameErrorText}
                                      </p>
                                    )}
                                    <input
                                      type="text"
                                      className="form-input with-shadow"
                                      name="url"
                                      placeholder="www.example.com"
                                      value={input.url}
                                      onChange={(e) => handleInputChange(index, e)}
                                    />
                                    {input.inputUrlError && (
                                      <p className="noto text-[#F04438] text-sm">
                                        {input.linkUrlErrorText}
                                      </p>
                                    )}
                                  </div>
                                  <div>
                                    {linkInputs.length > 1 && (
                                      <Trash01
                                        color="#F04438"
                                        onClick={() => removeLinkInput(index)}
                                      />
                                    )}
                                  </div>
                                </div>

                                <hr className="border-gray-200 my-6" />
                              </div>
                            ))}

                            <button onClick={linkInputs.length < 10 ? addLinkInput : null} className="main-btn no-bg">
                              เพิ่มปุ่ม <span className='text-[#475467]'>({linkInputs.length}/10)</span>
                            </button>

                            <div className="pt-4 flex">
                              <button
                                className="main-btn"
                                onClick={() => {
                                  saveLinkInputs()
                                  setOpenAddButtonModal(false)
                                  setTimeout(() => {
                                    setSelectCustomise(false)
                                  }, 400)
                                }}
                              >
                                ยืนยัน
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {addBtnMenuActive === 1 && (
                      <div className="overflow-y-auto  grid grid-cols-2 gap-3 p-4 " style={{height:"calc(100vh - 300px)"}}>
                        {templates.map((temp, indexTemp) =>
                          <button className='rounded-lg border border-solid  border-[#EBEBEB]' key={indexTemp} onClick={() => {
                            setNumTemplates(indexTemp)
                            setImagepath(generateImagePaths(indexTemp+1));
                            setEditTemplate(true);
                            setAddBtnMenuActive(3);``
                            setAddShortcut(true);
                          }}>
                            <img className='rounded-lg border border-solid  border-[#EBEBEB]' src={temp} width='100%'/>
                          </button>
                        )}
                      </div>
                    )}

                    {addBtnMenuActive == 3 && (
                      <div className="grid grid-rows-7 gap-1 place-item-center bg-white max-h-[calc(100vh-200px)] overflow-y-auto max-w-screen-xl">
                      <div className='row-span-3 flex items-center justify-center'>
                        <button className='h-75 flex items-center justify-center pt-4' onClick={() => { }}>
                          <img className='w-40 h-75 flex-shrink-0 rounded-2xl border border-gray-300 bg-[lightgray] bg-center bg-cover bg-no-repeat' src={imgPath[numSubTemplates-1]} width='100%'/>
                        </button>
                      </div>
                      <div className='row-span-2 grid grid-cols-4 gap-3 m-4 pl-6 pr-6'>
                        {imgPath.map((path, Subindex) => (
                          <button
                            className={`rounded-md bg-[lightgray] w-full h-full flex  bg-center bg-cover bg-no-repeat border border-[${focus == Subindex ? '#FF7301' : '#EBEBEB'}]`}
                            key={Subindex}
                            onClick={() => {
                              setSubNumTemplates(Subindex + 1);
                              setFocus(Subindex)
                            }}
                          >
                            <img className={`rounded-md bg-[lightgray] object-cover w-full h-full flex `} src={path} width='100%'/>
                          </button>
                        ))}
                      </div>
                      <div className='flex flex-col mt-7 m-4 pb-20'>
                        <div className='self-stretch text-gray-900 font-Eventpop font-bold text-2xl leading-[25px] tracking-[0.5px]'>Pastel classic Minimal</div>
                        <div className='text-gray-600 font-inter text-base font-normal leading-6 '>By zaviago</div>
                      </div>
                      <div className=' absolute h-20 bottom-0 right-0 left-0 bg-white max-w-[calc(100%)]' style={{boxShadow:'0px 4px 20px 0px rgba(35, 35, 35, 0.10)'}} >
                        <button
                          onClick={() => {
                            handleButtonClick((numTemplates*4) + numSubTemplates);
                            setAddBtnMenuActive(1);
                            setAddShortcut(false);
                            setSubNumTemplates(1);
                            setOpenAddButtonModal(false);
                            showSavedNoti('เปลี่ยนเทมเพลตสำเร็จ')
                            setFocus(0);
                          }}
                          className='main-btn h-12 m-5'
                          style={{width:'90%'}}
                        >
                          ยืนยัน
                        </button>
                      </div>
                    </div>
                    )}


                    {addBtnMenuActive === 2 && (
                      <>
                        {selectCustomise ? (
                          <>
                            {addShortcut ? (
                            <div className="p-4">
                              <nav className="relative mb-[30px]">
                                <button onClick={() => setShortcutMenuActive(0)} className={`text-center font-bold p-2 w-1/3 rounded-lg text-sm ${shortcutMenuActive === 0 ? 'bg-[#FFE9DD] text-[#FF4A00]' : 'bg-white text-black'}`}>
                                  โซเชียล
                                </button>
                                <button onClick={() => setShortcutMenuActive(1)} className={`text-center font-bold p-2 w-1/3 rounded-lg text-sm ${shortcutMenuActive === 1 ? 'bg-[#FFE9DD] text-[#FF4A00]' : 'bg-white text-black'}`}>
                                  ชอปปิ้ง
                                </button>
                                <button onClick={() => setShortcutMenuActive(2)} className={`text-center font-bold p-2 w-1/3 rounded-lg text-sm ${shortcutMenuActive === 2 ? 'bg-[#FFE9DD] text-[#FF4A00]' : 'bg-white text-black'}`}>
                                  อื่น ๆ
                                </button>
                              </nav>

                              {shortcutMenuActive === 0 && (
                                <div className='flex gap-y-8 flex-wrap'>
                                  {socialIcons.map((icon, index) =>
                                    <button key={index} className='flex justify-center' style={{width:"20%"}} onClick={() => {
                                      addIconInput(icon.icon, index)
                                      setAddShortcut(false);
                                    }}>{icon.icon}</button>
                                  )}
                                </div>
                              )}

                              {shortcutMenuActive === 1 && (
                                <div className='flex gap-y-8 flex-wrap'>
                                  {shoppingIcons.map((icon, index) =>
                                    <button key={index} className='flex justify-center' style={{width:"20%"}} onClick={() => {
                                      addIconInput(icon.icon, index)
                                      setAddShortcut(false);
                                    }}>{icon.icon}</button>
                                  )}
                                </div>
                              )}

                              {shortcutMenuActive === 2 && (
                                <div className='flex gap-y-8 flex-wrap'>
                                  {otherIcons.map((icon, index) =>
                                    <button key={index} className='flex justify-center' style={{width:"20%"}} onClick={() => {
                                      addIconInput(icon.icon, index)
                                      setAddShortcut(false);
                                    }}>{icon.icon}</button>
                                  )}
                                </div>
                              )}
                            </div>
                          ) : (
                            <div className="p-4" >
                              <Dialog.Description as='p' className='text-gray-600 text-sm text-center'>
                                กรุณากรอกชื่อปุ่มและ Url ของปุ่ม
                              </Dialog.Description>

                              <div className="overflow-y-auto mt-4" style={{height:"calc(100vh - 340px)"}}>
                                {/* {iconInputs.map((input, index) => (
                                  <div key={index} className="mb-4">
                                    <div className="flex items-center gap-x-[10px]">
                                      <div className="flex flex-col gap-y-[6px] grow">
                                        <div className="flex rounded-md flex-row-reverse">
                                          <input
                                            type="text"
                                            name="icon-link"
                                            className="form-input with-prefix"
                                            placeholder="ชื่อลิงก์"
                                          />
                                          <span className="input-addon form-prefix">{input.icon}</span>
                                        </div>
                                      </div>
                                      <div>
                                        <Trash01 color="#F04438" onClick={() => removeIconInput(index)} />
                                      </div>
                                    </div>
                                  </div>
                                ))} */}
                                <div>
                                  <button className="main-btn no-bg" onClick={() => {
                                    setAddShortcut(true)
                                  }}>เพิ่มไอคอน</button>
                                </div>
                                <hr className="border-gray-200 my-6"/>

                                <div className="mt-6">
                                  <RadioGroup value={selectedShortcutDisplay} onChange={setSelectedShortcutDisplay}>
                                    <RadioGroup.Label className="text-[#344054] text-sm">ตำแหน่งของปุ่มลัด</RadioGroup.Label>

                                    <div className="mt-4 grid grid-cols-2 gap-x-[10px]">
                                      {shortcutDisplay.map((list) => (
                                        <RadioGroup.Option

                                          key={list.id}
                                          value={list}
                                          className={({ checked, active }) =>
                                            classNames(
                                              checked ? 'border-transparent bg-[#FFE9DD]' : 'border-gray-300 bg-white',
                                              'relative flex cursor-pointer rounded-lg border p-4 shadow-sm :outline-none'
                                            )
                                          }
                                        >
                                          {({ checked, active }) => (
                                            <>
                                              <span className="flex flex-1 justify-center">
                                                <span className="flex flex-col">
                                                  <RadioGroup.Label as="span" className="block mx-auto">
                                                    {list.img(checked)}
                                                  </RadioGroup.Label>
                                                  <RadioGroup.Description as="span" className="mt-[14px] text-sm text-[#344054]">
                                                    {list.title}
                                                  </RadioGroup.Description>
                                                </span>
                                              </span>
                                              <span
                                                className={classNames(
                                                  active ? 'border' : 'border',
                                                  checked ? 'border-[#FF4A00]' : 'border-transparent',
                                                  'pointer-events-none absolute -inset-px rounded-lg'
                                                )}
                                                aria-hidden="true"
                                              />
                                            </>
                                          )}
                                        </RadioGroup.Option>
                                      ))}
                                    </div>
                                  </RadioGroup>
                                </div>
                              </div>

                              <div className="pt-4">
                                <button
                                  className="main-btn"
                                  onClick={() => {
                                    saveIconInputs();
                                    setOpenAddButtonModal(false);
                                    setTimeout(() => {
                                      setSelectCustomise(false)
                                    }, 500)
                                  }}
                                >
                                  ยืนยัน
                                </button>
                              </div>
                            </div>
                          )}
                          </>
                        ) : (
                          <div>
                            <button className='p-4 flex items-center justify-between w-full' onClick={() => {
                              setSelectCustomise(true)
                            }}>
                              <div className='flex items-center gap-x-3'>
                                <div className='flex bg-[#FF4A00] w-8 h-8 rounded-full items-center justify-center'>
                                  <MusicNotePlus color="white"/>
                                </div>
                                <div className='text-left'>
                                  <h2 className='text-gray-900 text-sm font-bold'>ไอคอน</h2>
                                  <p className='text-gray-600 text-para'>เพิ่มไอคอนสำหรับใช้เป็นปุ่มลัด</p>
                                </div>
                              </div>
                              <div>
                                <ChevronRight color='#667085'/>
                              </div>
                            </button>
                            <button className='p-4 flex items-center justify-between w-full' onClick={() => {

                              setOpenChangeTitle(true);
                            }}>
                              <div className='flex items-center gap-x-3'>
                                <div className='flex bg-[#1877F2] w-8 h-8 rounded-full items-center justify-center'>
                                  <TypeSquare color="white"/>
                                </div>
                                <div className='text-left'>
                                  <h2 className='text-gray-900 text-sm font-bold'>หัวข้อปุ่ม</h2>
                                  <p className='text-gray-600 text-para'>เพิ่มไอคอนสำหรับระบุกลุ่มของปุ่ม</p>
                                </div>
                              </div>
                              <div>
                                <ChevronRight color='#667085'/>
                              </div>
                            </button>
                          </div>
                        )}
                      </>
                    )}

                    {!addShortcut && (
                      <nav className="px-4 py-[9px] border-t border-t-[#EAECF0] relative">
                        <button onClick={() => setAddBtnMenuActive(0)} className={`text-center p-2 w-1/3 rounded-lg text-xs ${addBtnMenuActive === 0 ? 'bg-[#FFE9DD] text-[#FF4A00]' : 'bg-white text-black'}`}>
                          <Link01 className="mx-auto" viewBox='0 0 24 24' width='16' height='16'/>
                          <span className='inline-block mt-[2px]'>เพิ่มปุ่ม</span>
                        </button>
                        <button onClick={() => setAddBtnMenuActive(1)} className={`text-center p-2 w-1/3 rounded-lg text-xs ${addBtnMenuActive === 1 ? 'bg-[#FFE9DD] text-[#FF4A00]' : 'bg-white text-black'}`}>
                          <Grid01 className="mx-auto" viewBox='0 0 24 24' width='16' height='16'/>
                          <span className='inline-block mt-[2px]'>เทมเพลต</span>
                        </button>
                        <button onClick={() => setAddBtnMenuActive(2)} className={`text-center p-2 w-1/3 rounded-lg text-xs ${addBtnMenuActive === 2 ? 'bg-[#FFE9DD] text-[#FF4A00]' : 'bg-white text-black'}`}>
                          <MagicWand01 className="mx-auto" viewBox='0 0 24 24' width='16' height='16'/>
                          <span className='inline-block mt-[2px]'>ปรับแต่ง</span>
                        </button>
                      </nav>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openChangeTitle} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpenChangeTitle}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-t-[40px] bg-white text-left shadow-xl transition-all sm:my-8 w-full">
                  <div className="flex justify-center flex-col">
                    <div className="text-center p-4 border-b border-b-[#EAECF0]">
                      <Dialog.Title as="h3" className="text-base font-bold leading-6 text-[#101828] relative">
                        <button className="absolute left-0" onClick={() => {setOpenChangeTitle(false);setUpdateBtnTitle(btnTitle),setAddBtnMenuActive(2),setOpenAddButtonModal(true)}}>
                          <ChevronLeft color='#667085'/>
                        </button>
                        เพิ่มหัวข้อปุ่ม
                      </Dialog.Title>
                    </div>

                    <div className="p-4">
                      <div className="flex gap-x-[10px] items-start">
                        <div className="flex flex-col gap-y-[6px] w-full">
                          <label htmlFor='btn-title' className="text-gray-700 font-medium text-sm">หัวข้อปุ่ม</label>
                          <textarea id='btn-title' className="form-input" style={{height:"80px"}} maxLength={40} value={updateBtnTitle} onChange={(e) => setUpdateBtnTitle(e.target.value)}/>
                          <p className="text-para mt-[6px] text-right">{updateBtnTitle.length}/40</p>
                        </div>
                      </div>

                      <div className="pt-4 flex">
                        <button
                          className="main-btn"
                          onClick={() => {
                            setOpenChangeTitle(false);
                            if (updateBtnTitle === ""){
                              setBtnTitle("")
                            } else {
                              setBtnTitle(updateBtnTitle)
                              showSavedNoti('เพิ่มหัวข้อปุ่มสำเร็จ')
                            }
                          }}
                        >
                          ยืนยัน
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openShare} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => {
          setOpenShare(false);
          setCopyIcon(<Copy06 color='#FF4A00' viewBox='0 0 24 24' width='20' height='20'/>)
          setCopyText('คัดลอก')
        }}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:scale-95"
              >
                <Dialog.Panel style={{ height: 'calc(100vh - 30% )' }} className="relative transform overflow-hidden rounded-t-[40px] bg-white text-left shadow-xl transition-all sm:my-8 w-full">
                  <div className="flex justify-center flex-col">
                    <div className="text-center p-4 border-b border-b-[#EAECF0]">
                      <Dialog.Title as="h3" className="text-base font-bold leading-6 text-[#101828] relative">
                        <button className="absolute left-0" onClick={() => {
                          setOpenShare(false);
                          setCopyIcon(<Copy06 color='#FF4A00' viewBox='0 0 24 24' width='20' height='20'/>)
                          setCopyText('คัดลอก')
                        }}>
                          <ChevronLeft color='#667085'/>
                        </button>
                        แชร์ Hitlink
                      </Dialog.Title>
                    </div>

                    <div className="p-4 m-4">
                      <div className="flex justify-between px-[10px] py-3 bg-[#F5F5F5] rounded-[10px]">
                        <p className='text-[#101828] inter underline underline-offset-2 text-base'>{mylink}</p>
                        <button className='text-[#FF4A00] flex items-center gap-x-2 text-sm font-bold' onClick={copyLink}>
                          {copyIcon}
                          {copyText}
                        </button>
                      </div>

                      <div className=' p-4 -my-5 flex justify-center w-[60%] mx-auto'>
                        <QRCode value={mylink} ref={qrCodeRef}/>
                      </div>
                      <div className="flex gap-x-2">
                        <button className="secondary-btn gap-x-2 flex items-center justify-center" style={{padding:"10px 0"}} onClick={handleDownloadClick}>
                          <Download01 />
                          บันทึกรูปภาพ
                        </button>
                        <button
                          className="main-btn gap-x-2 flex items-center justify-center" style={{padding:"10px 0"}} onClick={() => {handleShareClick(mylink)}}
                        >
                          <Share06 />
                          แชร์เลย
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openAccountMenu} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpenAccountMenu}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-0 z-10 overflow-y-auto top-[50px] right-3">
            <div className="flex justify-end text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-3/4">
                  <div className="flex justify-center flex-col border-[#EAECF0]">
                    <div className="text-center">
                      <Dialog.Title as="h3" className="flex items-center justify-start gap-x-3 px-4 py-3 border-b border-b-[#EAECF0]">
                        <div className='text-left'>
                          <h2 className='text-gray-700 font-semibold inter'>{nameProfile}Olivia Rhye</h2>
                          <p className='text-sm text-gray-600 inter'>{emailProfile}olivia@untitledui.com</p>
                        </div>
                      </Dialog.Title>

                      <div>
                        <button className='p-4 flex items-center gap-x-2 text-gray-700 w-full inter font-medium text-sm outline-none' onClick={() => {
                          setOpenAccountMenu(false);
                          goNextTo('profile')
                        }}>
                          <User01 color='#344054'/>
                          บัญชีและความเป็นส่วนตัว
                        </button>
                        <button className='p-4 flex items-center gap-x-2 text-gray-700 w-full inter font-medium text-sm outline-none' onClick={() => {
                          setOpenAccountMenu(false);
                          goNextTo('contact')
                        }}>
                          <MessageSmileCircle color='#344054'/>
                          ติดต่อเรา
                        </button>
                        <button className='p-4 flex items-center gap-x-2 text-gray-700 w-full inter font-medium text-sm outline-none' onClick={() => {}}>
                          <LogOut01 color='#344054'/>
                          ออกจากระบบ
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openEditProfile} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => {
            setTempImage(image)
            setTempDescription(description)
            setSelectedTempEmoji(selectedEmoji)
            setSurnameTempProfile(surnameProfile)
            setTempName(surnameProfile)
            setOpenEditProfile(false)
        }
          }>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:scale-95"
              >
                <Dialog.Panel
                  className="relative transform overflow-hidden rounded-t-[40px] bg-white text-left shadow-xl transition-all sm:my-8 w-full">
                  <div className="flex justify-center flex-col">
                    <div className="text-center p-4 border-b border-b-[#EAECF0]">
                      <Dialog.Title as="h3" className="text-base font-bold leading-6 text-[#101828] relative">
                        <button className="absolute left-0" onClick={() => {setOpenEditProfile(false)
                                    setTempImage(image)
                                    setTempDescription(description)
                                    setSelectedTempEmoji(selectedEmoji)
                                    setSurnameTempProfile(surnameProfile)
                                    setTempName(surnameProfile)}}>

                          <ChevronLeft color='#667085'/>
                        </button>
                        แก้ไขโปรไฟล์
                      </Dialog.Title>
                    </div>

                    <div className="p-4">
                      <div className='w-[96px] m-auto relative'>
                        {image ? (
                          <label htmlFor='imageUpload' className="w-[96px] h-[96px] rounded-full bg-[#FF4A00] flex items-center justify-center text-[50px] text-white font-bold">
                              <input accept='image/*' type="file" id='imageUpload' onChange={(event) => {handleUploadImage(event)}} className='hidden'/>
                              <img src={tempImage}  className='h-full w-full bg-blue-500 rounded-full'/>
                          </label>
                        ) : (
                          <label htmlFor='uploadImg' >
                            <div className="w-[96px] h-[96px] rounded-full bg-[#FF4A00] flex items-center justify-center text-[50px] text-white font-bold">
                              <Image01 color='white' />
                            </div>
                              <input accept='image/*' type="file" id='uploadImg' onChange={(event) => {handleUploadImage(event); setImage(true),console.log('egwrewgwsf')}} className='hidden'/>
                              <img src={tempImage}  className='h-full w-full bg-blue-500 rounded-full' />
                          </label>
                        )}

                        {emoji ? (
                          <div className='w-7 h-7 bg-transparent rounded-full absolute bottom-0 right-0 flex justify-center items-center'>
                            <Emoji unified={selectedTempEmoji} size={24}/>
                          </div>
                        ) : (
                          <div className='w-7 h-7 pt-[1px] bg-[#FFE9DD] rounded-full absolute bottom-0 right-0 flex justify-center items-center'>
                            <FaceSmile color='#FF4A00'/>
                          </div>
                        )}
                      </div>
                      <div className="flex flex-col gap-y-4 mt-[30px]">
                        <div>
                          <label htmlFor='username' className="mt-[6px] text-para text-[#344054]">ชื่อ Hitlink <span className="required">*</span></label>
                          <input type='text' className="form-input with-shadow" id='username' placeholder="กรุณากรอกชื่อของคุณ" defaultValue={nameTemp} onChange={(event) => {setTempName(event.target.value)}}/>
                        </div>
                        <div className="relative">
                          <label htmlFor='emoji' className="mt-[6px] text-para text-[#344054]">อิโมจิ</label>
                          <button className="form-input with-shadow text-left flex justify-between items-center" id='emoji' onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
                            {emoji ? (<Emoji unified={selectedTempEmoji} size={24}/>) : <>เลือกอิโมจิ</>}
                            <div>
                              <ChevronDown color='#667085' className={`${showEmojiPicker ? 'transition rotate-180 duration-300' : 'transition duration-300'}`}/>
                            </div>
                          </button>
                          {showEmojiPicker ? (
                            <div className='flex h-screen fixed top-0 w-full left-0 justify-center items-center' onClick={() => setShowEmojiPicker(false)}>
                              <div className="absolute z-10">
                                <EmojiPicker width='100%' height='300px' onEmojiClick={(emojiData) => {
                                  setEmoji(true);
                                  setSelectedTempEmoji(emojiData.unified)
                                }}/>
                              </div>
                            </div>
                          ) : null}
                        </div>
                        <div>
                          <label htmlFor='bio' className="mt-[6px] text-para text-[#344054]">คำอธิบาย <span className="required">*</span></label>
                          <textarea className="form-input with-shadow h-[78px] resize-none"  value={descriptionTemp} id='bio' maxLength={80} onChange={(e) => {setTempDescription(e.target.value)}}/>
                          <p className="text-para mt-[6px] text-right">{descriptionTemp.length}/80</p>
                        </div>
                      </div>

                      <div className="pt-4 flex">
                        <button
                          className="main-btn"
                          onClick={() => {
                            setOpenEditProfile(false);
                            setOpenChangeTitle(false);
                          }}
                        >
                          ยืนยัน
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openReady} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpenReady}>
          <Transition.Child
            as={Fragment}
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-6 text-center">
              <Transition.Child
                as={Fragment}
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl w-full">
                  <div>
                    <div className="bg-[#FFE9DD] py-4">
                      <img src={readyToUse} className="m-auto"/>
                    </div>
                    <div className="mt-5 text-center">
                      <Dialog.Title as="h3" className="text-lg font-bold leading-6 text-gray-900">
                        Hitlink ของคุณ<br/>พร้อมใช้งานแล้ว🎉
                      </Dialog.Title>
                    </div>
                  </div>
                  <div className="m-5 flex flex-col gap-y-3">
                    <button
                      className="secondary-btn"
                      onClick={() => setOpenReady(false)}
                    >
                      ดำเนินการต่อ
                    </button>
                    <button
                      className="main-btn gap-x-2 flex items-center justify-center"
                      onClick={() => setOpenReady(false)}
                    >
                      <Share06 />
                      แชร์เลย
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openEdit} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpenEdit}>
          <Transition.Child
            as={Fragment}
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-6 text-center">
              <Transition.Child
                as={Fragment}
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl w-full">
                  <div>
                    <div className="bg-[#FFE9DD] py-4">
                      <img src={readyToUse} className="m-auto"/>
                    </div>
                    <div className="mt-5 text-center">
                      <Dialog.Title as="h3" className="text-lg text-left font-bold leading-6 text-gray-900 px-4">
                        คุณสามารถแก้ไข Hitlink ของ<br/>คุณได้ โดยกดที่ปุ่ม "แก้ไข"
                      </Dialog.Title>
                    </div>
                  </div>
                  <div className="m-5 flex flex-col gap-y-3">
                    <button
                      className="secondary-btn text-center"
                      onClick={() => {
                        goNextTo('edit');
                        setOpenEdit(false)
                        setIKnowEdit(true);
                      }}
                    >
                      รับทราบ
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <div className={`fixed top-[120px] flex left-0 justify-center w-full ${savedNoti ? savedNotiAnim : 'hidden'}`}>
        <div className='px-[14px] py-[10px] bg-[#6A6A6A80] rounded-lg flex text-white items-center text-sm gap-x-2'>
          <CheckCircle color='white'/>
          {savedNotiText}
        </div>
      </div>
    </>
  )
}

export default Profile;