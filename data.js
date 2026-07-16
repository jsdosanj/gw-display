// data.js - Edit this file to update text, translations, and questions
const kioskData = {
    settings: {
        timeoutSeconds: 45, // Seconds of inactivity before the screensaver starts
    },
    // Translation dictionaries
    translations: {
        en: {
            startBtn: "Tap Anywhere to Begin",
            subtitle: "Interactive Learning Exhibit",
            homeTitle: "Legacy of the Khalsa",
            homeSubtitle: "Explore the historic foundations of Sikh faith and authority.",
            pyareTitle: "The Panj Pyare",
            pyareSubtitle: "The Five Beloved Ones who answered Guru Gobind Singh Ji's historic call in 1699.",
            takhtTitle: "The Five Takhts",
            takhtSubtitle: "The supreme seats of spiritual and temporal authority in Sikhi.",
            quizTitle: "Test Your Knowledge",
            quizSubtitle: "Challenge yourself with interactive drag-and-drop and multiple choice questions.",
            back: "Back",
            reset: "Reset Screen",
            dragInstruction: "Drag each Takht card on the left and drop it onto its correct location on the map!",
            quizScore: "You scored",
            perfectScore: "Perfect! You are a true historian!",
            tryAgain: "Try Again",
            checkAnswers: "Check Answers",
            previousOccupation: "Prior Occupation",
            birthDeath: "Birth & Shaheedi",
            fromRegion: "From Region",
            represent: "Representing"
        },
        pa: {
            startBtn: "ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਕਿਤੇ ਵੀ ਟੈਪ ਕਰੋ",
            subtitle: "ਇੰਟਰਐਕਟਿਵ ਸਿੱਖਿਆ ਪ੍ਰਦਰਸ਼ਨੀ",
            homeTitle: "ਖ਼ਾਲਸੇ ਦੀ ਵਿਰਾਸਤ",
            homeSubtitle: "ਸਿੱਖ ਧਰਮ ਅਤੇ ਅਧਿਕਾਰ ਦੇ ਇਤਿਹਾਸਕ ਨੀਂਹ ਪੱਥਰਾਂ ਦੀ ਖੋਜ ਕਰੋ।",
            pyareTitle: "ਪੰਜ ਪਿਆਰੇ",
            pyareSubtitle: "ਪੰਜ ਪਿਆਰੇ ਜਿਨ੍ਹਾਂ ਨੇ 1699 ਵਿੱਚ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੀ ਇਤਿਹਾਸਕ ਆਵਾਜ਼ ਦਾ ਉੱਤਰ ਦਿੱਤਾ।",
            takhtTitle: "ਪੰਜ ਤਖ਼ਤ ਸਾਹਿਬਾਨ",
            takhtSubtitle: "ਸਿੱਖ ਧਰਮ ਵਿੱਚ ਅਧਿਆਤਮਕ ਅਤੇ ਸੰਸਾਰਕ ਅਧਿਕਾਰ ਦੇ ਸਰਵਉੱਚ ਆਸਣ।",
            quizTitle: "ਆਪਣੇ ਗਿਆਨ ਦੀ ਪਰਖ ਕਰੋ",
            quizSubtitle: "ਇੰਟਰਐਕਟਿਵ ਡਰੈਗ-ਐਂਡ-ਡ੍ਰੌਪ ਅਤੇ ਬਹੁ-ਵਿਕਲਪੀ ਪ੍ਰਸ਼ਨਾਂ ਨਾਲ ਆਪਣੇ ਆਪ ਨੂੰ ਚੁਣੌਤੀ ਦਿਓ।",
            back: "ਪਿੱਛੇ",
            reset: "ਸਕ੍ਰੀਨ ਰੀਸੈੱਟ ਕਰੋ",
            dragInstruction: "ਖੱਬੇ ਪਾਸੇ ਵਾਲੇ ਹਰੇਕ ਤਖ਼ਤ ਕਾਰਡ ਨੂੰ ਖਿੱਚੋ ਅਤੇ ਨਕਸ਼ੇ 'ਤੇ ਇਸਦੇ ਸਹੀ ਸਥਾਨ 'ਤੇ ਛੱਡੋ!",
            quizScore: "ਤੁਹਾਡਾ ਸਕੋਰ ਹੈ",
            perfectScore: "ਬਹੁਤ ਵਧੀਆ! ਤੁਸੀਂ ਇੱਕ ਸੱਚੇ ਇਤਿਹਾਸਕਾਰ ਹੋ!",
            tryAgain: "ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ",
            checkAnswers: "ਉੱਤਰ ਚੈੱਕ ਕਰੋ",
            previousOccupation: "ਪਹਿਲਾ ਕਿੱਤਾ",
            birthDeath: "ਜਨਮ ਅਤੇ ਸ਼ਹੀਦੀ",
            fromRegion: "ਇਲਾਕਾ",
            represent: "ਪ੍ਰਤੀਨਿਧਤਾ"
        }
    },
    // The Panj Pyare data
    panjPyare: [
        {
            id: 1,
            nameEn: "Bhai Daya Singh Ji",
            namePa: "ਭਾਈ ਦਯਾ ਸਿੰਘ ਜੀ",
            birthNameEn: "Daya Ram",
            birthNamePa: "ਦਇਆ ਰਾਮ",
            years: "1661 – 1708",
            casteEn: "Khatri",
            castePa: "ਖੱਤਰੀ",
            fromEn: "Lahore, Punjab (Representing North)",
            fromPa: "ਲਾਹੌਰ, ਪੰਜਾਬ (ਉੱਤਰ ਦੀ ਪ੍ਰਤੀਨਿਧਤਾ)",
            occupationEn: "Merchant",
            occupationPa: "ਵਪਾਰੀ",
            detailsEn: "The first to answer the Guru's call on Vaisakhi 1699. Fought courageously alongside Guru Gobind Singh Ji in major battles, delivering the historic Zafarnama letter to Aurangzeb.",
            detailsPa: "1699 ਦੀ ਵਿਸਾਖੀ 'ਤੇ ਗੁਰੂ ਸਾਹਿਬ ਦੀ ਆਵਾਜ਼ ਦਾ ਉੱਤਰ ਦੇਣ ਵਾਲੇ ਪਹਿਲੇ ਪਿਆਰੇ ਸਨ। ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੇ ਨਾਲ ਵੱਡੀਆਂ ਜੰਗਾਂ ਵਿੱਚ ਦਲੇਰੀ ਨਾਲ ਲੜੇ ਅਤੇ ਔਰੰਗਜ਼ੇਬ ਨੂੰ ਇਤਿਹਾਸਕ ਜ਼ਫ਼ਰਨਾਮਾ ਪਹੁੰਚਾਇਆ।"
        },
        {
            id: 2,
            nameEn: "Bhai Dharam Singh Ji",
            namePa: "ਭਾਈ ਧਰਮ ਸਿੰਘ ਜੀ",
            birthNameEn: "Dharam Das",
            birthNamePa: "ਧਰਮ ਦਾਸ",
            years: "1666 – 1708",
            casteEn: "Jat",
            castePa: "ਜੱਟ",
            fromEn: "Hastinapur, Uttar Pradesh (Representing East)",
            fromPa: "ਹਸਤਿਨਾਪੁਰ, ਉੱਤਰ ਪ੍ਰਦੇਸ਼ (ਪੂਰਬ ਦੀ ਪ੍ਰਤੀਨਿਧਤਾ)",
            occupationEn: "Farmer",
            occupationPa: "ਕਿਸਾਨ",
            detailsEn: "The second volunteer to offer his head. A symbol of righteousness, he dedicated his life to teaching Sikhi values and defending the fortress during campaigns.",
            detailsPa: "ਸੀਸ ਭੇਟ ਕਰਨ ਵਾਲੇ ਦੂਜੇ ਵਲੰਟੀਅਰ ਸਨ। ਧਰਮ ਅਤੇ ਸੱਚਾਈ ਦੇ ਪ੍ਰਤੀਕ, ਉਨ੍ਹਾਂ ਨੇ ਆਪਣਾ ਜੀਵਨ ਸਿੱਖੀ ਕਦਰਾਂ-ਕੀਮਤਾਂ ਦੇ ਪ੍ਰਚਾਰ ਅਤੇ ਕਿਲ੍ਹੇ ਦੀ ਰੱਖਿਆ ਲਈ ਸਮਰਪਿਤ ਕੀਤਾ।"
        },
        {
            id: 3,
            nameEn: "Bhai Himmat Singh Ji",
            namePa: "ਭਾਈ ਹਿੰਮਤ ਸਿੰਘ ਜੀ",
            birthNameEn: "Himmat Rai",
            birthNamePa: "ਹਿੰਮਤ ਰਾਏ",
            years: "1661 – 1705",
            casteEn: "Jheevar (Water Carrier)",
            castePa: "ਝੀਵਰ (ਪਾਣੀ ਢੋਣ ਵਾਲਾ)",
            fromEn: "Jagannath Puri, Odisha (Representing Center)",
            fromPa: "ਜਗਨਨਾਥ ਪੁਰੀ, ਉੜੀਸਾ (ਕੇਂਦਰ ਦੀ ਪ੍ਰਤੀਨਿਧਤਾ)",
            occupationEn: "Water Carrier",
            occupationPa: "ਪਾਣੀ ਢੋਣ ਵਾਲਾ",
            detailsEn: "Offered his head as the third beloved companion. Fought with supreme bravery at the battle of Chamkaur Sahib where he attained glorious martyrdom (Shaheedi).",
            detailsPa: "ਤੀਜੇ ਪਿਆਰੇ ਵਜੋਂ ਆਪਣਾ ਸੀਸ ਭੇਟ ਕੀਤਾ। ਚਮਕੌਰ ਸਾਹਿਬ ਦੀ ਜੰਗ ਵਿੱਚ ਬੇਮਿਸਾਲ ਬਹਾਦਰੀ ਨਾਲ ਲੜਦਿਆਂ ਸ਼ਹੀਦੀ ਪ੍ਰਾਪਤ ਕੀਤੀ।"
        },
        {
            id: 4,
            nameEn: "Bhai Mohkam Singh Ji",
            namePa: "ਭਾਈ ਮੋਹਕਮ ਸਿੰਘ ਜੀ",
            birthNameEn: "Mohkam Chand",
            birthNamePa: "ਮੋਹਕਮ ਚੰਦ",
            years: "1663 – 1705",
            casteEn: "Chhimba (Tailor/Printer)",
            castePa: "ਛੀਂਬਾ (ਦਰਜ਼ੀ/ਪ੍ਰਿੰਟਰ)",
            fromEn: "Dwarka, Gujarat (Representing West)",
            fromPa: "ਦਵਾਰਕਾ, ਗੁਜਰਾਤ (ਪੱਛਮ ਦੀ ਪ੍ਰਤੀਨਿਧਤਾ)",
            occupationEn: "Tailor & Printer",
            occupationPa: "ਦਰਜ਼ੀ ਅਤੇ ਕੱਪੜਾ ਛਾਪਣ ਵਾਲਾ",
            detailsEn: "The fourth beloved one. Stood steadfastly alongside the Guru and attained Shaheedi during the fierce, heroic battle at Chamkaur Sahib.",
            detailsPa: "ਚੌਥੇ ਪਿਆਰੇ ਸਨ। ਹਮੇਸ਼ਾ ਦ੍ਰਿੜਤਾ ਨਾਲ ਖੜ੍ਹੇ ਰਹੇ ਅਤੇ ਚਮਕੌਰ ਸਾਹਿਬ ਦੇ ਭਿਆਨਕ ਯੁੱਧ ਵਿੱਚ ਸ਼ਹੀਦੀ ਪ੍ਰਾਪਤ ਕੀਤੀ।"
        },
        {
            id: 5,
            nameEn: "Bhai Sahib Singh Ji",
            namePa: "ਭਾਈ ਸਾਹਿਬ ਸਿੰਘ ਜੀ",
            birthNameEn: "Sahib Chand",
            birthNamePa: "ਸਾਹਿਬ ਚੰਦ",
            years: "1662 – 1708",
            casteEn: "Nai (Barber)",
            castePa: "ਨਾਈ (ਹੱਜਾਮ)",
            fromEn: "Bidar, Karnataka (Representing South)",
            fromPa: "ਬੀਦਰ, ਕਰਨਾਟਕ (ਦੱਖਣ ਦੀ ਪ੍ਰਤੀਨਿਧਤਾ)",
            occupationEn: "Barber",
            occupationPa: "ਨਾਈ",
            detailsEn: "The fifth beloved companion to step forward, completing the Panj Pyare. He embodied the ultimate breaking of caste barriers and served with infinite devotion.",
            detailsPa: "ਅੱਗੇ ਆਉਣ ਵਾਲੇ ਪੰਜਵੇਂ ਪਿਆਰੇ ਸਨ, ਜਿਨ੍ਹਾਂ ਨੇ ਪੰਜ ਪਿਆਰਿਆਂ ਦੀ ਗਿਣਤੀ ਪੂਰੀ ਕੀਤੀ। ਉਨ੍ਹਾਂ ਨੇ ਜਾਤ-ਪਾਤ ਦੇ ਬੰਧਨਾਂ ਨੂੰ ਤੋੜਿਆ ਅਤੇ ਪੂਰੀ ਸ਼ਰਧਾ ਨਾਲ ਸੇਵਾ ਕੀਤੀ।"
        }
    ],
    // The 5 Takhts data with actual map coordinates
    takhts: [
        {
            id: "akal_takht",
            nameEn: "Sri Akal Takht Sahib",
            namePa: "ਸ੍ਰੀ ਅਕਾਲ ਤਖ਼ਤ ਸਾਹਿਬ",
            locationEn: "Amritsar, Punjab",
            locationPa: "ਅੰਮ੍ਰਿਤਸਰ, ਪੰਜਾਬ",
            coords: [31.6200, 74.8765],
            establishedByEn: "Guru Hargobind Sahib Ji (1606)",
            establishedByPa: "ਗੁਰੂ ਹਰਿਗੋਬਿੰਦ ਸਾਹਿਬ ਜੀ (1606)",
            detailsEn: "The supreme seat of temporal authority, constructed facing Sri Harmandir Sahib. It represents the concept of Miri-Piri (spiritual and temporal sovereignty).",
            detailsPa: "ਸੰਸਾਰਕ ਅਧਿਕਾਰ ਦਾ ਸਰਵਉੱਚ ਆਸਣ, ਜੋ ਕਿ ਸ੍ਰੀ ਹਰਿਮੰਦਰ ਸਾਹਿਬ ਦੇ ਬਿਲਕੁਲ ਸਾਹਮਣੇ ਸਥਿਤ ਹੈ। ਇਹ ਮੀਰੀ-ਪੀਰੀ (ਅਧਿਆਤਮਕ ਅਤੇ ਸੰਸਾਰਕ ਪ੍ਰਭੂਸੱਤਾ) ਦੇ ਸਿਧਾਂਤ ਨੂੰ ਦਰਸਾਉਂਦਾ ਹੈ।"
        },
        {
            id: "kesgarh_sahib",
            nameEn: "Takht Sri Keshgarh Sahib",
            namePa: "ਤਖ਼ਤ ਸ੍ਰੀ ਕੇਸਗੜ੍ਹ ਸਾਹਿਬ",
            locationEn: "Anandpur Sahib, Punjab",
            locationPa: "ਅਨੰਦਪੁਰ ਸਾਹਿਬ, ਪੰਜਾਬ",
            coords: [31.2335, 76.5026],
            establishedByEn: "Guru Gobind Singh Ji (1699)",
            establishedByPa: "ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ (1699)",
            detailsEn: "The birthplace of the Khalsa Panth. It is here that Guru Gobind Singh Ji prepared Amrit and initiated the original Panj Pyare on Vaisakhi day.",
            detailsPa: "ਖ਼ਾਲਸਾ ਪੰਥ ਦਾ ਜਨਮ ਅਸਥਾਨ। ਇੱਥੇ ਹੀ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਅੰਮ੍ਰਿਤ ਤਿਆਰ ਕੀਤਾ ਅਤੇ ਵਿਸਾਖੀ ਵਾਲੇ ਦਿਨ ਪੰਜ ਪਿਆਰਿਆਂ ਨੂੰ ਛਕਾਇਆ।"
        },
        {
            id: "damdama_sahib",
            nameEn: "Takht Sri Damdama Sahib",
            namePa: "ਤਖ਼ਤ ਸ੍ਰੀ ਦਮਦਮਾ ਸਾਹਿਬ",
            locationEn: "Talwandi Sabo, Punjab",
            locationPa: "ਤਲਵੰਡੀ ਸਾਬੋ, ਪੰਜਾਬ",
            coords: [30.1558, 75.0772],
            establishedByEn: "Guru Gobind Singh Ji (1705)",
            establishedByPa: "ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ (1705)",
            detailsEn: "Often referred to as 'Guru Ki Kashi' (seat of learning). This is where Guru Gobind Singh Ji compiled the final, complete version of Guru Granth Sahib Ji.",
            detailsPa: "ਇਸ ਨੂੰ 'ਗੁਰੂ ਕੀ ਕਾਸ਼ੀ' (ਸਿੱਖਿਆ ਦਾ ਕੇਂਦਰ) ਵੀ ਕਿਹਾ ਜਾਂਦਾ ਹੈ। ਇੱਥੇ ਹੀ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦੀ ਸੰਪੂਰਨ ਬੀੜ ਤਿਆਰ ਕਰਵਾਈ ਸੀ।"
        },
        {
            id: "patna_sahib",
            nameEn: "Takht Sri Patna Sahib",
            namePa: "ਤਖ਼ਤ ਸ੍ਰੀ ਪਟਨਾ ਸਾਹਿਬ",
            locationEn: "Patna, Bihar",
            locationPa: "ਪਟਨਾ, ਬਿਹਾਰ",
            coords: [25.5896, 85.2268],
            establishedByEn: "Birthplace of Guru Gobind Singh Ji (1666)",
            establishedByPa: "ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦਾ ਪ੍ਰਕਾਸ਼ ਅਸਥਾਨ (1666)",
            detailsEn: "Built to honor the birthplace of Sri Guru Gobind Singh Ji. This sacred site was also historically visited by Guru Nanak Dev Ji and Guru Tegh Bahadur Ji.",
            detailsPa: "ਸ੍ਰੀ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੇ ਪ੍ਰਕਾਸ਼ ਅਸਥਾਨ ਦੇ ਸਨਮਾਨ ਵਜੋਂ ਬਣਾਇਆ ਗਿਆ। ਇਸ ਪਵਿੱਤਰ ਅਸਥਾਨ 'ਤੇ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਅਤੇ ਗੁਰੂ ਤੇਗ ਬਹਾਦਰ ਜੀ ਵੀ ਚਰਨ ਪਾਏ ਸਨ।"
        },
        {
            id: "hazur_sahib",
            nameEn: "Takht Sri Hazur Sahib",
            namePa: "ਤਖ਼ਤ ਸ੍ਰੀ ਹਜ਼ੂਰ ਸਾਹਿਬ",
            locationEn: "Nanded, Maharashtra",
            locationPa: "ਨਾਂਦੇੜ, ਮਹਾਰਾਸ਼ਟਰ",
            coords: [19.1534, 77.3182],
            establishedByEn: "Guru Gobind Singh Ji (1708)",
            establishedByPa: "ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ (1708)",
            detailsEn: "The place where Guru Gobind Singh Ji spent his final days, declared Sri Guru Granth Sahib Ji as the eternal living Guru of the Sikhs, and departed for heavenly abode (Jyoti Jot).",
            detailsPa: "ਉਹ ਅਸਥਾਨ ਜਿੱਥੇ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਆਪਣੇ ਅੰਤਿਮ ਦਿਨ ਬਿਤਾਏ, ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਨੂੰ ਹਮੇਸ਼ਾ ਲਈ ਗੁਰਤਾਗੱਦੀ ਦਿੱਤੀ ਅਤੇ ਜੋਤੀ ਜੋਤਿ ਸਮਾਏ।"
        }
    ],
    // The interactive game and multiple-choice questions
    quiz: {
        multipleChoice: [
            {
                questionEn: "Who was the first Pyara to step forward in 1699?",
                questionPa: "1699 ਵਿੱਚ ਸਭ ਤੋਂ ਪਹਿਲਾਂ ਕਿਹੜੇ ਪਿਆਰੇ ਨੇ ਆਪਣਾ ਸੀਸ ਭੇਟ ਕੀਤਾ ਸੀ?",
                optionsEn: ["Bhai Dharam Singh Ji", "Bhai Daya Singh Ji", "Bhai Himmat Singh Ji"],
                optionsPa: ["ਭਾਈ ਧਰਮ ਸਿੰਘ ਜੀ", "ਭਾਈ ਦਯਾ ਸਿੰਘ ਜੀ", "ਭਾਈ ਹਿੰਮਤ ਸਿੰਘ ਜੀ"],
                correctIndex: 1
            },
            {
                questionEn: "Which Takht is recognized as 'Guru Ki Kashi' (The Center of Learning)?",
                questionPa: "ਕਿਹੜੇ ਤਖ਼ਤ ਸਾਹਿਬ ਨੂੰ 'ਗੁਰੂ ਕੀ ਕਾਸ਼ੀ' (ਵਿੱਦਿਆ ਦਾ ਕੇਂਦਰ) ਮੰਨਿਆ ਜਾਂਦਾ ਹੈ?",
                optionsEn: ["Takht Sri Damdama Sahib", "Sri Akal Takht Sahib", "Takht Sri Patna Sahib"],
                optionsPa: ["ਤਖ਼ਤ ਸ੍ਰੀ ਦਮਦਮਾ ਸਾਹਿਬ", "ਸ੍ਰੀ ਅਕਾਲ ਤਖ਼ਤ ਸਾਹਿਬ", "ਤਖ਼ਤ ਸ੍ਰੀ ਪਟਨਾ ਸਾਹਿਬ"],
                correctIndex: 0
            },
            {
                questionEn: "Which Takht is located outside of Punjab in Maharashtra?",
                questionPa: "ਪੰਜਾਬ ਤੋਂ ਬਾਹਰ ਮਹਾਰਾਸ਼ਟਰ ਵਿੱਚ ਕਿਹੜਾ ਤਖ਼ਤ ਸਾਹਿਬ ਸਥਿਤ ਹੈ?",
                optionsEn: ["Takht Sri Patna Sahib", "Takht Sri Keshgarh Sahib", "Takht Sri Hazur Sahib"],
                optionsPa: ["ਤਖ਼ਤ ਸ੍ਰੀ ਪਟਨਾ ਸਾਹਿਬ", "ਤਖ਼ਤ ਸ੍ਰੀ ਕੇਸਗੜ੍ਹ ਸਾਹਿਬ", "ਤਖ਼ਤ ਸ੍ਰੀ ਹਜ਼ੂਰ ਸਾਹਿਬ"],
                correctIndex: 2
            }
        ]
    }
};
