import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const info = props => {
    return (
    <Container>
        <div id="autism">
            <Typography variant="h4"  style={{marginTop: '1rem'}}>Autism</Typography>
        <Typography style={{textAlign: 'justify'}}>
                Autism, or autism spectrum disorder (ASD), refers to a broad range of conditions characterized by challenges with social skills, repetitive behaviors, speech and nonverbal communication. According to the Centers for Disease Control, autism affects an estimated 1 in 160 children in the world today.
        
        We know that there is not one autism but many subtypes, most influenced by a combination of genetic and environmental factors. Because autism is a spectrum disorder, each person with autism has a distinct set of strengths and challenges. The ways in which people with autism learn, think and problem-solve can range from highly skilled to severely challenged. Some people with ASD may require significant support in their daily lives, while others may need less support and, in some cases, live entirely independently.
        
        Several factors may influence the development of autism, and it is often accompanied by sensory sensitivities and medical issues such as gastrointestinal (GI) disorders, seizures or sleep disorders, as well as mental health challenges such as anxiety, depression and attention issues.
        
        Indicators of autism usually appear by age 2 or 3. Some associated development delays can appear even earlier, and often, it can be diagnosed as early as 18 months. Research shows that early intervention leads to positive outcomes later in life for people with autism.
            </Typography>
        </div>
        <div id="dyslexia">
        <Typography variant="h4"  style={{marginTop: '1rem'}}>Dyslexia</Typography>

        <Typography style={{textAlign: 'justify'}}>
                Dyslexia is a learning disorder that involves difficulty reading due to problems identifying speech sounds and learning how they relate to letters and words (decoding). Also called reading disability, dyslexia affects areas of the brain that process language.
    
    People with dyslexia have normal intelligence and usually have normal vision. Most children with dyslexia can succeed in school with tutoring or a specialized education program. Emotional support also plays an important role.
    
            </Typography>

        </div>
        <div id="cb">
        <Typography variant="h4"  style={{marginTop: '1rem'}}>Colour Blindness</Typography>
            <Typography variant="h6"  style={{marginTop: '1rem'}}>Red and Green </Typography>
        <Typography variant="body1" style={{textAlign: 'justify'}}>

        {/* red color blindness green color blindness */}
        
        {/* Green Color Blindness – */}
        Deuteranopia and Deuteranomaly
        Green color blindness is by far the most common form; around 6% of the total male population is green color blind – primarily as a mild deficiency.
        
        As with red color blindness, green color blind people can be categorised in two groups:
        
        <Typography variant="subtitle2" style={{marginTop:'1rem'}}>Deuteranopia </Typography> The M-cones are missing, or non-functional, resulting in blindness to the green portion of the spectrum. 5% of males and 0.1% of females suffer this form of green color blindness.
        <Typography variant="subtitle2" style={{marginTop:'1rem'}}>Deuteranomaly </Typography> The M-Cones are defective, operating below normal capacity to interfere with a person’s ability to see some shades of green, shifting color sensitivity toward the red sensitive L-cones. 1% of males and 0.35% of females suffer this form.
        As with most forms of color blindness, Green color blindness is also sex linked, being passed on to children through faulty genetic coding in the X chromosome.
            </Typography>
            <Typography variant="h6" style={{marginTop: '1rem'}}>Blue and Yellow </Typography>
            <Typography style={{textAlign: 'justify'}}>

    Blue yellow color blindness is quite uncommon, and the name itself taken as a description is actually quite misleading. People who are blue yellow color blind will confuse some shades of blue with green, and some shades of yellow with violet. Much like red green color blindness, those who are blue yellow color blind can be categorised in two ways. However, unlike red and green color blindness, blue yellow color blindness is not more prominent in males, as the gene that causes the S cones to be absent or defective is not found on the X chromosome, but rather chromosome 7.
    
    Blue Yellow Color Blindness
    Tritanopia: the S-cones are missing or non-functional, resulting in blindness to the blue end of the spectrum.
    Tritanomaly: the s-cones are defective, operating below normal capacity to interfere with a person’s ability to see some shades of blue.
    blue yellow color blindness
    Vischeck simulation of normal vision vs blue yellow color blind vision
    Whilst different sources present varying statistics, you can expect to find that only 0.01% of all humans may have this form of color blindness. Compared with red green color blindness, a higher portion of blue yellow color blind people actually come to be affected via non genetic mechanisms. The following sources of non congenital color blindness primarily present as blue yellow color blindness:
                </Typography>
        </div>

    </Container>);
}

export default info;