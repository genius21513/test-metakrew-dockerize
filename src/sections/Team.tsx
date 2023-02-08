import React, { useState } from "react";
import { useEffect } from "react";
import { Box, Text } from "theme-ui";
import { TeamMember, TeamMemberProps } from "../components/TeamMember";
import { useMetaContext } from "../context";

export const Team: React.FC = () => {
  const { MetaState } = useMetaContext()

  const [teamMembers, setTeamMembers] = useState(MetaState.content.team)

  useEffect(() => {
    setTeamMembers(MetaState.content.team)
  }, [MetaState])


  const [selection, setSelection] = useState(teamMembers.slice(0, 6))
  // const [stop, setStop] = useState(false)

  const handleLeft = () => {
    setSelection(teamMembers.slice(0, 6));
  };

  const handleMiddle = () => {
    setSelection(teamMembers.slice(6, 12));
  };

  const handleRight = () => {
    setSelection(teamMembers.slice(12, teamMembers.length))
  }

  return (
    <Box
      id="team"
      variant="layout.section"
      sx={{
        display: ["none", "none", "none", "none", "flex"],
        flexDirection: "column",
      }}
    >
      <Text variant="layout.section.team.title">THE TEAM</Text>
      <Box variant="layout.section.team.teamMemberContainer"
        sx={{
          justifyContent: selection[0].name === "Will" ? "space-around" : "space-between",
        }}
      >
        {selection.map((member: TeamMemberProps) => (
          <TeamMember
            key={member.name}
            social={member.social}
            name={member.name}
            title={member.title}
            image={member.image}
          />
        ))}
      </Box>
      <Box variant="layout.section.faqs.paginationContainer">
        <Box
        variant="layout.section.faqs.paginationContainer.pageButton"
          onClick={handleLeft}
          sx={{
            backgroundColor: selection[0].name === "Matty" ? "white" : "transparent",
          }}
        />
        <Box
          onClick={handleMiddle}
          variant="layout.section.faqs.paginationContainer.pageButton"
          sx={{
            backgroundColor:
              selection[0].name === "Vuey" ? "white" : "transparent",
            mx: "1rem"
          }}
        />
        <Box
          onClick={handleRight}
          variant="layout.section.faqs.paginationContainer.pageButton"
          sx={{
            backgroundColor:
              selection[0].name === "Will" ? "white" : "transparent",
          }}
        />
      </Box>
    </Box>
  );
};

export default Team
