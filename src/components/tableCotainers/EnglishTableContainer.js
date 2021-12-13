import * as React from 'react'
import {
   Table,
   TableHead,
   TableBody,
   TableRow,
   TableCell,
   Box,
   CardMedia,
} from '@mui/material'
import { useTeamContext } from '../../contexts/TeamContext'
 
const EnglishTableContainer = () => {
   const teamData = useTeamContext()
 
   return (
       <Table
           sx={{
               width: 300,
               margin: '60px 40px 60px 0',
               bgcolor: 'background.paper',
               borderRadius: 1,
               boxShadow: 4,
           }}>
           <TableHead>
               <TableRow>
                   <TableCell align="left">Pos</TableCell>
                   <TableCell align="left">Club</TableCell>
                   <TableCell align="left"></TableCell>
                   <TableCell align="left">PL</TableCell>
                   <TableCell align="left">W</TableCell>
                   <TableCell align="left">D</TableCell>
                   <TableCell align="left">L</TableCell>
                   <TableCell align="left">GD</TableCell>
                   <TableCell align="left">Pts</TableCell>
               </TableRow>
           </TableHead>
           <TableBody>
               {teamData.englishTable.map((team) => {
                   return (
                       <TableRow key={team.idTeam}>
                           <TableCell align="left">{team.intRank}</TableCell>
                           <TableCell align="left">
                               <Box sx={{display: 'flex',}}>
                                   <CardMedia
                                       component="img"
                                       image={team.strTeamBadge}
                                       alt="team badge"
                                   />
                               </Box>
                           </TableCell>
                           <TableCell align="left">{team.strTeam}</TableCell>
                           <TableCell align="left">{team.intPlayed}</TableCell>
                           <TableCell align="left">{team.intWin}</TableCell>
                           <TableCell align="left">{team.intDraw}</TableCell>
                           <TableCell align="left">{team.intLoss}</TableCell>
                           <TableCell align="left">{team.intGoalDifference}</TableCell>
                           <TableCell align="left">{team.intPoints}</TableCell>
                       </TableRow>
                   )
               })}
           </TableBody>
       </Table>
   )
}
 
export default EnglishTableContainer