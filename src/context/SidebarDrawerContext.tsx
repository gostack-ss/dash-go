import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { createContext, ReactNode, useContext } from "react";

interface SidebarDrawerProviderProps {
  children: ReactNode
}

type SidebarDrawerContextData = UseDisclosureReturn

const SidebarDrawerrContext = createContext({} as SidebarDrawerContextData)

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {

  const disclousure = useDisclosure()
  const router = useRouter()

  useEffect(() => {
    disclousure.onClose()
  }, [router.asPath])

  return (
    <SidebarDrawerrContext.Provider value={disclousure}>
      {children}
    </SidebarDrawerrContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerrContext)